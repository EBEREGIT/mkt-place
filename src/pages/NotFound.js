import React from 'react'
import { Container } from 'react-bootstrap'

export default function NotFound() {
    return (
        <Container>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p>The page you requested does not exist. Please check the URL you entered!</p>
        </Container>
    )
}
