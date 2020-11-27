import { Link } from "react-router-dom";
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Header() {
    return (
        <header>
            <Container>
            <Row className="text-center">
                <Col><h2>Todo List</h2></Col>
            </Row>
            <Row className="text-center">
                <Col className="text-center">
                <div    iv class="topnav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>  
            </div>
                </Col>
            </Row>
            </Container>  
        </header>
    )
}

export default Header;
