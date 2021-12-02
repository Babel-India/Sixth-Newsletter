import React from "react"
import "./Styles/Games.css"
import Video from "../Images/Team/Triumphant.mp4";
import { Container, Col, Row } from "react-bootstrap";

const Team = () => {
    return(
        <div>
            <h1 className='team-head'>Triumphant</h1>
            <video src={Video} controls='controls' width='30%' height='15%' className='video' />
            
        </div>
    )
}

export default Team;
