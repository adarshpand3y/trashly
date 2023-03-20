import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { IoBagCheckOutline } from 'react-icons/io5'
import { BsShop } from 'react-icons/bs'
import Typed from "react-typed"


const Buy = () => {
  return (
    <>

      <Container fluid className="my-5 py-3">

        <Row style={{ textAlign: 'center' }} className="my-5">
          <Col>
            <h1>
              <Typed className="ele"
                strings={[
                  "Checkout Our Items",
                  "Cheap",
                  "Recycled",
                  "Reliable"
                ]}
                typeSpeed={350}
                backSpeed={350}
                loop
              />
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="px-4" >
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
                  alt="First slide"
                  width={600} height={600}
                />

                <Carousel.Caption>
                  <h3>PET</h3>
                  <p>PET (Polyethylene Terephthalate) is a popular thermoplastic. This material is thin and is perfect for producing low-pressure products. Clothing fibers and soft drink bottles are popular products made from PET.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1613792962823-946490e6fbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Second slide"
                  width={600} height={600}
                />

                <Carousel.Caption>
                  <h3>PVC</h3>
                  <p>PVC (Polyvinyl Chloride) is another thermoplastic. It is also one of the commonly used plastic materials around the world. PVC is used to produce wires, pipes, bottles and clings films.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1614484691701-709df3fec2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Third slide"
                  width={600} height={600}
                />

                <Carousel.Caption>
                  <h3>HDPE</h3>
                  <p>HDPE (High Density Poly Ethylene)is also a thermoplastic. It is softer and more flexible compared to PVC. Examples of products that manufacturers use HDPE to produce are gallons and pipes.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt="Fourth slide"
                  width={600} height={600}
                />

                <Carousel.Caption>
                  <h3>LDPE</h3>
                  <p>This material is the opposite of HDPE. LPDE (Low Density Poly Ethylene) is used to make plastic bags. Sometimes, it is not easy to recycle this material. Instead of recycling, you can clean and reuse them for other purposes.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={1}></Col>
          <Col xs={12} md={5} className="my-auto mx-auto">

            <Card border="info" className='my-4 mx-auto' style={{ width: '22rem', height: '20rem', textAlign: 'center', color: '#32208d', backgroundColor: '#DBFCFF' }}>
              <Card.Body>
                <Card.Title> <IoBagCheckOutline /> Buy Our Recycled Plastic</Card.Title>
                <Card.Subtitle className="mb-3 text-muted"> <em>-- Cheap and fully recycled</em></Card.Subtitle>
                <Card.Text>
                  Are you worried, that you drained out all those plastic from your home for all those intimidating cashbacks? Don't worry, we got
                  your back. Buy all kinds of necessary plastic products from here, starting from a bottle to decorating items - we have everything for you, at
                  amazing prices!
                </Card.Text>
                <Button variant="warning" href="#Buy"><BsShop /> Buy Here</Button>
              </Card.Body>
            </Card>

          </Col>
        </Row>

      </Container>


    </>
  )
}

export default Buy