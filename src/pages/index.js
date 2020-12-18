import React from 'react'
import './pages.css'
import lastMatchImage from './img/prev-match.png'
import potw from './img/potw.jpg'
import SoccerBall from '@material-ui/icons/SportsSoccer'


const Home = () => {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <h1 className="page-title">City Lions 2020/2021</h1>
            <div className="container">
                <div className="section">
                    <h1 style={{ 'textAlign': 'center' }}>Last Match</h1>
                    <img id="lastMatchImage" src={lastMatchImage} alt="last match" />
                    <h2 style={{ 'textAlign': 'center' }}>Scoreline</h2>
                    <h3 style={{ 'display': 'inlineFlex', 'verticalAlign': 'middle', 'paddingBottom': '15px' }}><SoccerBall /> &nbsp; Ndidi 21'</h3>
                    <h3 style={{ 'display': 'inlineFlex', 'verticalAlign': 'middle' }}><SoccerBall /> &nbsp; Wells 53'</h3>
                </div>
                <div className="section">
                    <h1 style={{ 'textAlign': 'center' }}>20/21 League Standings</h1>
                    <table id="standings">
                        <thead>
                            <tr>
                                <th>Club</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GD</th>
                                <th>PTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1 <span style={{ 'color': '#2191bb' }}><b>City Lions</b></span></td>
                                <td>4</td>
                                <td>0</td>
                                <td>1</td>
                                <td>+5</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>2 Super Spiders</td>
                                <td>2</td>
                                <td>2</td>
                                <td>1</td>
                                <td>+3</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>3 Village Youngsters</td>
                                <td>2</td>
                                <td>1</td>
                                <td>2</td>
                                <td>-3</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>4 Lakeside Sailors</td>
                                <td>2</td>
                                <td>0</td>
                                <td>3</td>
                                <td>-1</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>5 Park Rangers</td>
                                <td>1</td>
                                <td>2</td>
                                <td>2</td>
                                <td>-2</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>6 Town Vipers</td>
                                <td>1</td>
                                <td>1</td>
                                <td>3</td>
                                <td>-2</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 style={{ 'textAlign': 'center', 'paddingTop': '25px' }}>Player of the Week</h1>
                    <div style={{ 'display': 'inline-block', 'verticalAlign': 'top' }}>
                        <img id='potwImg' src={potw} alt="img" />
                    </div>
                    <div style={{ 'display': 'inline-block', 'paddingTop': '30px', 'paddingLeft': '20px' }}>
                        <div style={{ 'textAlign': 'center' }}>
                            <h1 style={{ 'color': '#2191bb' }}>City Lions</h1>
                            <br></br>
                            <h2>Wilfred Ndidi</h2>
                            <h3>Defensive Midfielder</h3>
                            <h3>1 Goal</h3>
                            <h3>1 Assist</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
