import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'

const Contact = () => {
    return (
        <footer className="contact" id="contact">
            <h1>Get in touch </h1>
            <div className="container contact">
                <Form className="contact-form">
                    
                    <Form.Row>
                        <Col>
                            <input type="text" placeholder="First name"></input>
                        </Col>
                        <Col>
                            <input type="text" placeholder="Last name"></input>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <input className='message' type="text" placeholder="Your Message" ></input>
                        </Col>
                    </Form.Row>
                    <Button variant="primary" className="customBtn" type="submit">Submit
                </Button>
                </Form>
                <br></br><br></br>
                <div className="footerLinks">
                
                    <h6><strong>Crunchy Tuna Roll</strong></h6><p>Menu | About Us | Reservations | Contact </p>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-facebook-f"></i>
                    <i className="fa fa-pinterest"></i>
                    <i className="fa fa-instagram"></i>

                </div>
                
            </div>
        </footer>
    )
}

export default Contact
