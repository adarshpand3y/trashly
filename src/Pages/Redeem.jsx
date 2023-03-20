import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BVid } from '../Components/BVid'
import Footer from '../Components/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import o from "../Assets/o.png"
import k from "../Assets/k.png"
import m from "../Assets/m.png"
import Toast from 'react-bootstrap/Toast';

const Redeem = () => {


    return (
        <>
            <BVid />
            <Container className="d-flex justify-content-around">
                <Row>
                    <Col className='my-5'>
                        <Card style={{ width: '13rem', backgroundColor: '#DDF0FF' }} className='m-2 p-2'>
                            <Card.Img variant="top" src={o} alt='coupon' style={{ width: '10rem' }} className="mx-auto" />
                            <Card.Body>
                                <Card.Title className="pb-2"></Card.Title>
                                <Card.Text> <b>40% off</b> </Card.Text>
                                <Card.Text> <small>40 points</small> </Card.Text>
                                <Button className="mx-auto" style={{ width: '100%', backgroundColor: '#7E52A0' }} >Redeem now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='my-5'>
                        <Card style={{ width: '13rem', backgroundColor: '#DDF0FF' }} className='m-2 p-2'>
                            <Card.Img variant="top" src={k} alt='coupon' style={{ width: '10rem' }} className="mx-auto" />
                            <Card.Body>
                                <Card.Title className="pb-2"></Card.Title>
                                <Card.Text> <b>40% off</b> </Card.Text>
                                <Card.Text> <small>40 points</small> </Card.Text>
                                <Button className="mx-auto" style={{ width: '100%', backgroundColor: '#7E52A0' }} >Redeem now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='my-5'>
                        <Card style={{ width: '13rem', backgroundColor: '#DDF0FF' }} className='m-2 p-2'>
                            <Card.Img variant="top" src={m} alt='coupon' style={{ width: '10rem' ,height: '5.5rem' }} className="mx-auto" />
                            <Card.Body>
                                <Card.Title className="pb-2"></Card.Title>
                                <Card.Text> <b>40% off</b> </Card.Text>
                                <Card.Text> <small>40 points</small> </Card.Text>
                                <Button className="mx-auto" style={{ width: '100%', backgroundColor: '#7E52A0' }} >Redeem now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Redeem