import React from 'react';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'
import { Card, Col, Row } from 'react-bootstrap';
import { FaCalendar } from 'react-icons/fa';

const LeftNvaInsight = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={1} className="g-4">

                <Col >
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                <FaCalendar /> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                <FaCalendar /> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                <FaCalendar /> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNvaInsight;