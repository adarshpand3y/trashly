import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'


const Contactus = () => {

  const [person, setPerson] = useState({ name: '', email: '', message: '' });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const { name, email, message } = person

    if (name && email && message) {
      setShow(true)
      const res = await fetch(
        "https://plastick-a4f41-default-rtdb.asia-southeast1.firebasedatabase.app/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message
          })
        },
      )
      if (res) {
        setPerson({
          name: '',
          email: '',
          message: '',
        })
      }
    }

    else {
      alert('Please enter all the required credentials')
    }

  }

  return (<>

    <div >
      <Container className="my-5">
        <Row>
          <Col xs={12} className="my-3 mx-auto">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
              <Toast.Header>
                <strong className="me-auto">Form Submitted</strong>
                <small>Few seconds ago</small>
              </Toast.Header>
              <Toast.Body>Awesome, Our Courier will contact you within 24 hrs!</Toast.Body>
            </Toast>
          </Col>
        </Row>
        <Row className="m-4" style={{ border: '2px solid black', backgroundColor: '#DCE1DE', color: '#1F2421' }}>
          <Col xs={12} className="my-5 mx-auto">

            <Form method="POST">
              <Form.Label><h1>Contact Us</h1></Form.Label>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  // id="name"
                  name="name"
                  value={person.name}
                  onChange={handleChange}
                  placeholder="Enter name here"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  // id="email"
                  name="email"
                  value={person.email}
                  onChange={handleChange}
                  placeholder="Enter email here"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="message"
                  // id="message"
                  name="message"
                  value={person.message}
                  onChange={handleChange}
                  as="textarea"
                  placeholder="Message"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className='btn' onClick={handleSubmit}>
                Submit
              </Button>

            </Form>

          </Col>
        </Row>
      </Container>
    </div>


  </>);
};

export default Contactus;