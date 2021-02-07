import { NavLink } from "react-router-dom";
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Header() {
    return (
        <header>
            <Container>
            <Row className="text-center">
                <Col className="text-center">
                <div className="topnav">
                <NavLink activeStyle={{ color: "rgb(207, 204, 23)" }} to="/todo-list">Todo List</NavLink>
                {/* <NavLink activeStyle={{ color: "rgb(207, 204, 23)" }} to="/about">About</NavLink>   */}
            </div>
                </Col>
            </Row>
            </Container>  
        </header>
    )
}

export default Header;
