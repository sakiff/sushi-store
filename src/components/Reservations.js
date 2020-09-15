import React from 'react'
import { Form, Button} from 'react-bootstrap'

const Reservations = () => {
    return (
        <div className="reservations" id="reservations">
            <h1>Book you experience with us!</h1><br></br>
            
            <Form className="container">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter full name" required/>
                    <Form.Text className="text-muted">
                    This name will be called during reservation time.
                    </Form.Text>
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number" required/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" min="11:00" max="22:00" required/>
                </Form.Group>
                <Button variant="primary" className="customBtn" type="submit">
                Submit
                </Button>
            </Form>    
        </div>
        
    )
}

export default Reservations
