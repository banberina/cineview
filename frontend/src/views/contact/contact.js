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

    const [data, setData] = useState({
        email : "",
        name : "",
        message : ""
    })

    useEffect(() => { 
    },[]);

    const handleInputField = useCallback(event => {
        setData({...data, [event.target.name] : event.target.value})
      })

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
                        {/* <div className="do-you">Do you?</div> */}
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
                                onChange={handleInputField}
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
                                onChange={handleInputField}
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
                                onChange={handleInputField}
                                />
                                </Col>
                                </Row>
                            </FormGroup>
                            
                            <Button color="info" type="submit" className="submit-btn">
                                Submit
                            </Button>
                            </form>
                    </Col>
                </Row>
                <Row className="footer-custom">
                    <Col style={{textAlign:"left"}}>
                        <div>
                        <span style={{color:"white"}}>Francuske </span>revolucije bb
                        </div>
                        <div>
                        <span style={{color:"white"}}>+387 </span>63 727 727
                        </div>
                        <div>
                        <span style={{color:"white"}}>+387 </span>33 555 432
                        </div>
                        <div>
                        <span style={{color:"white"}}>info</span>@cineview.ba
                        </div>
                    </Col>
                    <Col style={{textAlign:"right", color: "white"}}>
                    <div>
                        Made with <i className="tim-icons icon-heart-2" />
                    </div>
                    <div>
                        Berina Bandic & Hamdija Radoncic
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default ContactScreen;