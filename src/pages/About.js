import React from 'react'
import { Container, Row, Col } from 'reactstrap';

 function About() {
    return (
        <Container className="test">
           <Row className="text-white">
                <Col md={2}></Col>
                <Col md={8}>
                   <div className="text-center"><h1>About</h1></div>
                    <div className="text-left">
                    <p>This is the Group 5 To-do-list Project.</p> 
                    <p>Group 5 consists of Tino, Kauser, and Spyridon.</p>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>      
        </Container>       
              
    )
}


export default About;
