import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { GiTwoCoins } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
// import Toast from 'react-bootstrap/Toast';

const SellM = () => {

  const [status, setStatus] = useState("");
  const [bottles, setBottles] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Verifying... Please Wait...")
    const filename = document.getElementById("formFile").value;
    const noOfBottles = filename[filename.lastIndexOf(".") - 1];
    const url = `/map/${"bottles"}/${noOfBottles}`;
    console.log(url);
    navigate(url);
  }

  // const toast = ()=>{
  //   return (
  //     <Toast>
  //       <Toast.Header>
  //         <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
  //         <strong className="me-auto">Bootstrap</strong>
  //         <small>11 mins ago</small>
  //       </Toast.Header>
  //       <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
  //     </Toast>
  //   );
  // }

  return (<>

    <Container className='py-5 my-4' >
      <Row className='p-3'>
        <Col >
          <h1 style={{ color: '#1B4965' }}>Sell your Plastic and get assured cashbacks and deals <GiTwoCoins /></h1>
        </Col>
      </Row>
      <Row className='p-3'>
        <Col>
          <Form style={{ backgroundColor: 'lightgrey' }} className='p-3'>
            <Form.Group className="mb-3" controlId="input">
              <Form.Label>Describe the items you are selling</Form.Label>
              <Form.Control type="amount" required placeholder="Enter item" />
            </Form.Group>

            <h4>Upload your plastic image here </h4>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
          {status &&
            <div className="container bg-light mt-4 p-3">
              <h2 style={{ color: '#1B4965' }}>{status}</h2>
              {bottles && <>
                <h4 style={{ color: '#1B4965' }}>Bottles detected: {bottles}</h4>
                <h4 style={{ color: '#1B4965' }}>Points for 1 bottle: 10</h4>
                <h4 style={{ color: '#1B4965' }}>Estimated cashback points gained: {bottles * 10}</h4>
              </>
              }
            </div>
          }
        </Col>
      </Row>
      <center>
      </center>
    </Container>

  </>)
}

export default SellM