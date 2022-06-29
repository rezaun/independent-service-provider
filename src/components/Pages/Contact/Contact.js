import { Marker, Popup } from 'leaflet';
import React from 'react';
import { Button, Form } from 'react-bootstrap';



const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="container my-5">
                <div className="row py-5">
                    <h2 className='text-center'>Contact With Us</h2>
                    <div className="col-md-8 offset-md-2 col-xs-12">
                        <Form onClick={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address *</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder='Your Message ' />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Contact Us
                            </Button>
                        </Form>
                    </div>
                  
                </div>
            </div>

        </>
    );
};

export default Contact;