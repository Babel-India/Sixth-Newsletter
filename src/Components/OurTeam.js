import React from "react";
import "./Styles/Team-intro.css";
import {Container, Col, Row } from 'react-bootstrap';
import Karan from "../Images/Team/Karan.jpg";
import Vimmy from '../Images/Team/Vimmy.jpg';
import Yash from "../Images/Team/Yash.jpg";
import Jay from "../Images/Team/Jay.jpg";
import Sushree from "../Images/Team/Sushree.jpg";
import Neha from "../Images/Team/Neha.jpg";
import Namrata from "../Images/Team/Namrata.jpg";
// import Lalit from "../Images/Team/Lalit.jpg";
import Nishant from "../Images/Team/Nishant.jpg";


function TeamIntro() {
    return(
        <div className='team-intro'>
            <h1 className='team-head'>Our Team</h1>
              <Row className="group">
                <Col>
                    <div>
                        <img className='introImage' src={Karan} alt='Karan' />
                        <h4 className='member'>Karan Sharma</h4>
                        <p>Content Editor/Web Designer</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='introImage' src={Vimmy} alt="Vimmy" />
                        <h4 className='member'>Vimmy Vashisht</h4>
                        <p>Content Writer</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='introImage' src={Sushree} alt="Sushree" />
                        <h4 className='member'>Sushree Ray</h4>
                        <p>Content Writer/Web Designer</p>
                    </div>
                </Col>
               </Row>
               <Row className="group">
                <Col>
                    <div>
                        <img className='introImage' src={Neha} alt="Neha" />
                        <h4 className='member'>Neha Bhatt</h4>
                        <p>Web Developer</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='introImage' src={Namrata} alt="Namrata" />
                        <h4 className='member'>Namrata Mishra</h4>
                        <p>Content Writer</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='introImage' src={Yash} alt="Yash" />
                        <h4 className='member'>Yash Bhatnagar</h4>
                        <p>Content Writer</p>
                    </div>
                </Col>
               </Row>
               <Row>
               <Col>
                    
                </Col>
                <Col>
                    <div>
                        <img className='introImage' src={Nishant} alt="Nishant" />
                        <h4 className='member'>Nishant Gupta</h4>
                        <p>Content Writer</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='introImage' src={Jay} alt="jay" />
                        <h4 className='member'>Jay Bhat</h4>
                        <p>Web Developer</p>
                    </div>
                </Col>
               </Row>
        </div>
    )
}
export default TeamIntro;
