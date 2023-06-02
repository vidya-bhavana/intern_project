import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <>

            <Card className='shadow-lg m-2 p-3 rounded' >
                <Card.Img src={product.image} style={{height:'500px' ,objectFit:'contain'}} />
                <Card.Body>
                    <Card.Title><text style={{color:'rgb(13,202,240)',fontSize:'25px'}}>Title:</text> {product.title}</Card.Title>
                    <Card.Title><text style={{color:'rgb(13,202,240)',fontSize:'25px'}}>Price:</text> ₹{product.price}</Card.Title>
                    <Card.Title>
                        <text style={{color:'rgb(13,202,240)',fontSize:'25px'}}>Description:</text> <text style={{fontFamily:'serif'}}>{product.description.slice(0,10)}...</text>
                    </Card.Title>
                 
                    <Link to={`product/${product.id}`}>
                        <Button className='btn btn-light text-dark border-dark'>Detail</Button>
                    </Link>
                </Card.Body>

                
                
            </Card>
       
           
        </>
    )
}

export default ProductCard
