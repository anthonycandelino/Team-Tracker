import React from 'react'
import { Tag, InputNumber } from 'antd';

const Stats = () => {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <h1 className="page-title">Player Stats</h1>
            <div className="stat-container">
                <div className="stat">
                    <div className="stat-person">
                        <h3>John Smitch</h3>
                        <Tag color="#2191bb">Goals</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={1} />
                        &nbsp;&nbsp;
                        <Tag color="blue">Assists</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={0} />
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-person">
                        <h3>Wilfred Ndidi</h3>
                        <Tag color="#2191bb">Goals</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={1} />
                        &nbsp;&nbsp;
                        <Tag color="blue">Assists</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={1} />
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-person">
                        <h3>Leo Messi</h3>
                        <Tag color="#2191bb">Goals</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={0} />
                        &nbsp;&nbsp;
                        <Tag color="blue">Assists</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={2} />
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-person">
                        <h3>Sergio Aguero</h3>
                        <Tag color="#2191bb">Goals</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={2} />
                        &nbsp;&nbsp;
                        <Tag color="blue">Assists</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={1} />
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-person">
                        <h3>Wayne Rooney</h3>
                        <Tag color="#2191bb">Goals</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={1} />
                        &nbsp;&nbsp;
                        <Tag color="blue">Assists</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={2} />
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-person">
                        <h3>David Silva</h3>
                        <Tag color="#2191bb">Goals</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={0} />
                        &nbsp;&nbsp;
                        <Tag color="blue">Assists</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={6} />
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-person">
                        <h3>Harry Kane</h3>
                        <Tag color="#2191bb">Goals</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={5} />
                        &nbsp;&nbsp;
                        <Tag color="blue">Assists</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={1} />
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-person">
                        <h3>Sadio Mane</h3>
                        <Tag color="#2191bb">Goals</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={4} />
                        &nbsp;&nbsp;
                        <Tag color="blue">Assists</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={1} />
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-person">
                        <h3>Timo Werner</h3>
                        <Tag color="#2191bb">Goals</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={0} />
                        &nbsp;&nbsp;
                        <Tag color="blue">Assists</Tag>
                        <InputNumber style={{ width: '60px' }} min={0} max={100} defaultValue={0} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
