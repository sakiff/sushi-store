import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import {items} from './items/Items'

const Order = () => {

    const [order, setOrder] = useState(0);

    return (
        <>
        <h1 className="reservations" id="order">Order Here</h1>
        <section className="order-container">
            {items.map(item => (
            <Card  key={item.id} item={item} className="orderCard" style={{ width: '200px' }}>
             <Card.Img variant="top" src={item.img} alt=''/>
             <Card.Body>
                 <Card.Title  className="orderTitle">{item.name}</Card.Title>
                 <Card.Text className="orderTitle"> ${item.price}</Card.Text>
                 <Button 
                     variant="primary" 
                     className="addToCart" 
                     onClick={() => setOrder(order + item.price*1.088)}>Add to Cart</Button>
             </Card.Body>
             </Card>
            ))}
            <h3 className="orderSubtitle">Total: ${order.toFixed(2)}</h3>
         </section>
        
        </>
        
    )
}

export default Order
