import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Login from '../components/Account/Login'
import Register from '../components/Account/Register'

export default function Account() {
    return (
        <Container>
            <Row>
                {/* login */}
                <Col xs={12} sm={12} md={6} lg={6}>
                    <Login />
                </Col>

                {/* Register */}
                <Col xs={12} sm={12} md={6} lg={6}>
                    <Register />
                </Col>
            </Row>
        </Container>
    )
}
