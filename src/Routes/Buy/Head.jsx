import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default function Head(props) {
    const { countCartItems } = props
    return (<>

        <Navbar bg="warning" variant="light" className='py-2'>
            <Container>
                <Navbar.Brand href="#"> <h1>Our items</h1></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{color: 'black'}}>
                        <h3>
                            See your Bag{' '}
                            {props.countCartItems ? (<button style={{backgroundColor: 'crimson',color: 'white'}}>{props.countCartItems}</button>) : ('')}
                        </h3>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>);
}