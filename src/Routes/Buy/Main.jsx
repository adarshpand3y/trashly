import React from 'react';
import Product from './Product';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Main(props) {
    const { products, onAdd } = props;
    return (<>

        <Container fluid className="my-3 mx-auto">
            <Row className='mx-2' >
                <Col xs={12} md={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {products.map((product) => (
                        <Product key={product.id} product={product} onAdd={onAdd} />
                    ))}
                </Col>
            </Row>
        </Container>

    </>);
}