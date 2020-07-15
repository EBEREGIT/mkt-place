import React from 'react'
import { Row, Col } from 'react-bootstrap'
import MenuDashboard from '../components/Dashboard/MenuDashboard'
import ProductsDashboard from '../components/Dashboard/ProductsDashboard'
import ServicesDashboard from '../components/Dashboard/ServicesDashboard'

export default function Dashboard() {
    return (
        <Row id="dashboard">
            {/* Dashboard Menu */}
            <Col md={2} lg={2}>
                <MenuDashboard />
            </Col>
            
            {/* Dashboard Products */}
            <Col xs={12} sm={12} md={5} lg={5}>
                <ProductsDashboard/>
            </Col>

            {/* Dashboard Services */}
            <Col xs={12} sm={12} md={5} lg={5}>
                <ServicesDashboard/>
            </Col>
        </Row>
    )
}
