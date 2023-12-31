import React from 'react';
import data from '../data.json';
import '../App.css';

function AboutMe() {
    const { displayName, sex, age, location, onlineNow, mood, emoji, defaultPic, pics, videos } = data;
    let today = new Date().toLocaleDateString("en-US");

    return (
        <div id="tiles">
            <table id="about-me">
                <tbody id="about-body">
                    <tr id="name">
                        <td id="display-name">
                            <h1>{displayName}</h1>
                        </td>
                    </tr>
                    <tr id="about-me-row">
                        <td id="default-pic-col">
                            <div className="default-pic">
                                <img alt ="profile picture" src = {defaultPic}/>
                            </div>
                        </td>
                        <td id="asl-info-col">
                            {age} <br/>
                            {sex} <br/>
                            {location} <br/>
                            <img alt ="myspace online now" src = {onlineNow}/><br/>
                            <text>Last Login:</text><br/>
                            {today} <br/>
                        </td>
                    </tr>
                    <tr id="about-mood">
                        <td id="mood">
                            <b>Mood:</b> {mood} {emoji}<br/>
                            View My: <a href = {pics} target = "_blank" >Pics</a> | <a href = {videos} target = "_blank">Videos</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AboutMe