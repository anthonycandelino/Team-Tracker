import React, { useState } from 'react';
import { Button, Table, Input, message, InputNumber, Modal, Popconfirm, Form } from 'antd';
import { Edit, Delete } from '@material-ui/icons/'
import './pages.css'

const firstNames = ['John', 'Terry', 'George', 'Mike', 'Gary', 'Tony', 'Joe', 'James', 'Eric', 'Sergio', "Jacob", "Cory", "Trevor", 'Ross'];
const lastNames = ['Smith', 'Brown', 'Roy', 'Johnson', 'Lee', 'Wilson', 'MacDonald', 'Taylor', 'Williams', 'Thompson'];
const originData = [];

for (let i = 0; i < 4; i++) {
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let name = firstName + ` ` + lastName;
    let emailHandle = (firstName + lastName).toLowerCase();
    originData.push({
        key: i.toString(),
        name: name,
        email: emailHandle + `@citylions.com`,
    });
}


const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                    children
                )}
        </td>
    );
};

const PlayerList = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleOk = () => {
        setIsModalVisible(false);
        message.success('New Player Added To Team!');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            email: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const deleteRow = (record) => {

        let temp = data.filter(x => x.key !== record.key)
        let i = 0;
        temp.forEach(x => x.key = i++)
        setData(temp);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '15%',
            editable: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '20%',
            editable: true,
        },
        {
            title: 'Action(s)',
            dataIndex: 'operation',
            width: '5%',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            href="javascript:;"
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </a>
                        <Popconfirm title="Sure you want to cancel?" okText="Yes"
                            cancelText="No" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                        <div>
                            <div style={{ 'display': 'inline-block', 'padding': '10px' }}>
                                <a disabled={editingKey !== ''} onClick={() => edit(record)}>
                                    <Edit style={{ 'color': '#2191bb' }} />
                                </a>
                            </div>
                            <div style={{ 'display': 'inline-block' }}>
                                <Popconfirm
                                    title="Are you sure to delete this player?"
                                    onConfirm={() => deleteRow(record)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <a><Delete style={{ 'color': '#ff4141' }} /></a>
                                </Popconfirm>
                            </div>
                        </div>
                    );
            },
        },
    ];



    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <h1 className="page-title">City Lions Player Information</h1>
            <Form form={form} component={false}>
                <div className="playerListTable">
                    <Form style={{ float: 'right' }}>
                        <Button type="primary submit" onClick={() => setIsModalVisible(true)} style={{ 'marginRight': '5px', marginBottom: 20 }}>
                            Add New Player +
                        </Button>
                    </Form>
                    <Table
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}
                        bordered
                        dataSource={data}
                        columns={mergedColumns}
                        rowClassName="editable-row"
                        pagination={{
                            onChange: cancel,
                            defaultPageSize: 11,
                        }}
                    />
                </div>

            </Form>
            <Modal title="Add New Player to Team" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <>
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        onFinish={(e) => {
                            console.log(e)
                            e.key = data.length + 1;
                            setData([...data, e])
                            handleOk(false);
                        }}
                    >
                        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                            <Input placeholder="Email" />
                        </Form.Item>

                        <Form.Item>
                            <Button htmlType="submit">Save</Button>
                        </Form.Item>
                    </Form>
                </>
            </Modal>
        </div>
    );
};

export default PlayerList
