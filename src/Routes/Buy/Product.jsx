import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Product(props) {
    const { product, onAdd} = props
    return (<>
        <Card style={{ width: '13rem',backgroundColor:'#DDF0FF' }} className='m-2 p-2'>
            <Card.Img variant="top" src={product.image} alt={product.name} style={{ width: '10rem'}} className="mx-auto"/>
            <Card.Body>
                <Card.Title className="pb-2">{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button className="mx-auto" style={{width:'100%',backgroundColor:'#7E52A0'}} onClick={() => onAdd(product)}>Add to cart</Button>
            </Card.Body>
        </Card>

    </>)
}
