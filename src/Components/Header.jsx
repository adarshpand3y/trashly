import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Recycle } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
// import Image from 'react-bootstrap/Image'

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-4">
                <Container>
                    <Navbar.Brand href="#Plastick" style={{ Color: 'yellowgreen' }} ><h3><Recycle /> Plastick</h3> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/">Home</Link>

                            <Link className='nav-link' to="/about">About Us</Link>

                            <Link className='nav-link' to="/contact">Contact Us</Link>
                            {props.authDetails.type==="user" &&
                                <Link className='nav-link' to="/map" key="user">User</Link>
                            }
                            {props.authDetails.type==="trader" &&
                                <Link className='nav-link' to="/map/trader/1" key="trader">Trader</Link>
                            }
                            <Link className='nav-link' to="/buy">Buy Items</Link>

                            <Link className='nav-link' to="/sell">Sell Items</Link>
                            
                            <Link className='nav-link' to="/redeem">Redeem</Link>


                        </Nav>
                        <Form className="d-flex m-1">
                            <FormControl
                                type="search"
                                placeholder="Search here..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                            {props.authDetails.email !== ""?
                                <Button variant="outline-success ms-2" onClick={props.handleLogout}>Logout</Button>:
                                <Button variant="outline-success ms-2" onClick={()=>navigate("/login")}>Login</Button>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header