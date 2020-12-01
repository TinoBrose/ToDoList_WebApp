import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import img from '../images/done.gif'

 function About() {
    return (
        <>
        <Container className="about">
           <Row className="text-white">
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="text-center">
                    <p>This is the Group 5 To-do-list Project.</p> 
                    <div className="p-5">
                        <img src={img}></img>
                    </div>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
        <div className="main-about">
            <div className="container">
            <div className="row">
                {/*col 1 */}
                <div className="col">
                    <h4>TO DO APP</h4>
                    <ul className="list-unstyled">
                        <li>123-456-789</li>
                        <li>Weisskopfstrasse 123,</li>
                        <li>Berlin,Germany.</li>                          
                    </ul>
                </div>
                {/*colum 2*/}
                <div className="col">
                    <h4>Team</h4>
                    <ul className="list-unstyled">
                        <li>Tino Brose</li>
                        <li>Kauser Jaffari</li>
                        <li>Spyridon Kavvadas</li>                          
                    </ul>
                </div>
                {/*colum 3*/}
                <div className="col">
                    <h4>Powered by</h4>
                    <ul className="list-unstyled">
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>HTML, <span> CSS </span></li>                          
                    </ul>
                </div>
            </div>
            </div>
        </div>          
      </>        
    )
}


export default About;
