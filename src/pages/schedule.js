import React, {useState} from 'react'
import { Modal, Button, Form, Select, DatePicker, message, TimePicker} from 'antd';
import './pages.css'

const Schedule = () => {
    const [games, setGames] = useState([{    
        key: 0,
        home: 'City Lions',
        opponent: 'Super Spiders',
        date: 'December 22, 2020',
        time: '7:15 PM',
        hide: false,
    },
    {
        key: 1,
        home: 'City Lions',
        opponent: 'Lakeside Sailors',
        date: 'December 24, 2020',
        time: '7:15 PM',
        hide: false,
    }
    ]) 
    
    const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    const [isModalVisible, setIsModalVisible] = useState(false) 

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const yes = (g) => {
        let temp = games
        temp.forEach(tempGame => {
            if (tempGame.key === g.key) {
                tempGame.hide = true;
                tempGame.keyWord = "coming"
            }
        })
        setGames([...temp])
        message.success('See you at the game!');
    };
      
    const no = (g) => {
        let temp = games
        temp.forEach(tempGame => {
            if (tempGame.key === g.key) {
                tempGame.hide = true;
                tempGame.keyWord = "not coming"
            }
        })
        setGames([...temp])
        message.error('Sorry you can\'t make it :(');
    };

    return (
        <div style={{justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            <h1 className="page-title">Upcoming Fixtures</h1>
            <div className='match-container'>
                <Button type="primary" id="newMatchButton" onClick={() => setIsModalVisible(true)}>Add New Match + </Button>
            </div>
            <div className='match-container'> 
                {games.map(g =>
                    <div className='match'>
                        <b><h1 className="city-lions-text">{g.home}</h1></b>
                        <b><h1 style={{'display': 'inline'}}> vs. {g.opponent}</h1></b>
                        <h2>Date: {g.date}</h2>
                        <h2>Kickoff: {g.time}</h2>
                        <hr></hr>
                        <br/>
                        <div>
                            {g.hide!==true ? 
                                <>
                                <h3>Are you coming to this game?</h3>
                                <Button type="primary" onClick={()=> yes(g)}>Yes</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button onClick={()=> no(g)}>No</Button> 
                                </>
                            : g.keyWord == "coming" ? <h3 style={{color: 'green'}}>You are {g.keyWord} to this game</h3> :
                            <h3 style={{color: 'red'}}>You are {g.keyWord} to this game</h3>}
                        </div>
                    </div> 
                )}
            </div>
                
            <Modal title="Add An Upcoming match" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <>
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        onFinish={ (e) => {
                            console.log(e.date)
                            e.date = months[parseInt(e.date.month())] + " " + e.date.toString().split(" ")[2] + ", " + e.date.toString().split(" ")[3]
                            e.home = 'City Lions';
                            e.key = games.length + 1;
                            let hour = parseInt(e.time.toString().split(" ")[4].split(":")[0])
                            let amPm = (hour > 12) ? " PM" : " AM";
                            if (hour > 12) { 
                                hour = hour - 12;
                            } else if (hour == 0) {
                                hour = 12;
                            }
                            let min = e.time.toString().split(" ")[4].split(":")[1]
                            let combinedTime = hour + ":" + min + amPm;
                            e.time = combinedTime;
                            setGames([...games, e])
                            handleOk(false);
                        }}
                    >
                        <Form.Item label="Opponent" name="opponent" rules={[{ required: true }]}>
                        <Select req placeholder="-- Select an Opponent --">
                            <Select.Option value="Village Youngsters">Village Youngsters</Select.Option>
                            <Select.Option value="Super Spiders">Super Spiders</Select.Option>
                            <Select.Option value="Lakeside Sailors">Lakeside Sailors</Select.Option>
                            <Select.Option value="Park Rangers">Park Rangers</Select.Option>
                            <Select.Option value="Town Vipers">Town Vipers</Select.Option>
                        </Select>
                        </Form.Item>
                        <Form.Item name="date" label="Date" rules={[{ required: true }]}>
                        <DatePicker />
                        </Form.Item>
                        <Form.Item name="time">
                            <TimePicker use12Hours format="h:mm a"/>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">Save</Button>
                        </Form.Item> 
                    </Form>
                </>
            </Modal>
        </div>
    )
}

export default Schedule
