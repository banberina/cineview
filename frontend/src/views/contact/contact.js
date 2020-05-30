import React, { useState, useCallback, useEffect} from "react";
import { Col, Row, Container, Progress, Badge} from 'reactstrap';
import {
  Card, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import inTheatre from "../../movies/json/movies-in-theaters.json"
import './contact.css'

function ContactScreen() {

    const [currentDay, setCurrentDay] = useState(1)

    useEffect(() => { 
        inTheatre.sort(function() {
            return .5 - Math.random();
          });
    },[currentDay]);

    return (
        <>
        <div className="view-holder">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="top-text">
                        We believe in the <b>connection</b> between
                        </div>
                        <div className="large-text"> 
                            movies
                        </div>
                        <div className="top-text">
                            and
                        </div>
                        <div className="large-text">
                            happiness
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="large-text">Do you?</div>
                        <form>
                            <FormGroup>
                                <Row>
                                    <Col>
                                <Label for="contactName" 
                                className="contact-label">Name</Label>
                                <Input
                                type="name"
                                name="name"
                                id="contactName"
                                placeholder="Your Name"
                                />
                                    </Col>
                                    <Col>
                                <Label for="contactEmail" 
                                className="contact-label">E-mail</Label>
                                <Input
                                type="email"
                                name="email"
                                id="contactEmail"
                                placeholder="Your Email"
                                autoComplete="off"
                                /></Col>
                                </Row>
                                <Row>
                                    <Col>
                                <Label for="contactMessage" 
                                className="contact-label">Message</Label>
                                <Input
                                type="message"
                                name="message"
                                id="contactMessage"
                                placeholder="Tell us more!"
                                autoComplete="off"
                                />
                                </Col>
                                </Row>
                            </FormGroup>
                            
                            <Button color="info" type="submit">
                                Submit
                            </Button>
                            </form>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default ContactScreen;