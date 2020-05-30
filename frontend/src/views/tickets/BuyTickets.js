import React, { useState, useCallback, useEffect } from "react";
import { Col, Row, Container, Progress, Badge } from 'reactstrap';
import {
    Card, CardHeader, CardText, CardBody,
    CardTitle, CardSubtitle, Button, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,
    FormGroup,
    Label,
    Input,
    FormText, Checkbox
} from 'reactstrap';
import inTheatre from "../../movies/json/movies-in-theaters.json"

function BuyTickets() {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        paymentMethod: "",
        agreement: ""
    })

    useEffect(() => {
    }, []);

    const handleInputField = useCallback(event => {
        setData({ ...data, [event.target.name]: event.target.value })
    })

    return (
        <>
            <div className="view-holder">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="large-text">
                                Movie info nisam stigla ovo :(
                        </div>
                        </Col>
                        <Col md={6}>
                            <form>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label for="ticketName"
                                                className="contact-label">Full Name</Label>
                                            <Input
                                                type="name"
                                                name="name"
                                                id="contactName"
                                                placeholder="Your Name"
                                                onChange={handleInputField}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label for="contactPhone"
                                                className="contact-label">Telephone</Label>
                                            <Input
                                                type="phone"
                                                name="phone"
                                                id="contactPhone"
                                                placeholder="Tell us more!"
                                                autoComplete="off"
                                                onChange={handleInputField}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label for="contactEmail"
                                                className="contact-label">E-mail</Label>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="contactEmail"
                                                placeholder="Your Email"
                                                autoComplete="off"
                                                onChange={handleInputField}
                                            /></Col>
                                    </Row>
                                    <Col><br></br></Col>
                                    <Row>
                                        <Col>
                                        <Label check>
                                            <Input type="checkbox" />{""}
                                                I agree                                    
                                            </Label>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <Button color="info" type="submit" className="submit-btn">
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

export default BuyTickets;

