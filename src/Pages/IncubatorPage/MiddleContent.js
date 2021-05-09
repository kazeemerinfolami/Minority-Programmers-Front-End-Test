import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

function MiddleContent() {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="incubator-mid-img-wrapper bacgroundIm">
                        <div>Advance Startup</div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="incubator-mid-img-wrapper bacgroundIm2">
                        <div>Join Minority Ventures Cohort</div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="incubator-mid-img-wrapper bacgroundIm3">
                        <div>Help sthing</div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MiddleContent
