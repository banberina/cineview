import React, { useState, useCallback, useEffect} from "react";
import { Col, Row, Container, Progress, Badge} from 'reactstrap';
import {
  Card, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert
} from 'reactstrap';
import inTheatre from "../../movies/json/movies-in-theaters.json"
import './contact.css'

function ContactScreen() {
    const [clicked, setClicked] = useState(0)
    const [data, setData] = useState({
        email : "",
        name : "",
        message : ""
    })
    const [errors, setErrors] = useState({
        email : "",
        name : "",
        message : ""
    })

    const validateForm = async () => {
        var error = {
            email : "",
            name : "",
            message : ""
        }
        if(data.email.length == 0 ){
            error.email = "You must provide your email"
        } else {
            error.email = ""
        }
        if(!validateEmail(data.email)){
            error.email = "You must provide a valid email"
        } 
        if(data.name.length == 0 ){
            error.name = "You must provide your name"
        }else {
            error.name = ""
        }
        if(data.message.length == 0 ){
            error.message = "You must say something !"
        }else {
            error.message = ""
        }
        await setErrors(error)
        setClicked(clicked + 1)
    }

    function validateEmail (email) {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
      }

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
                                <Row>
                                <Col md={6} sm = {12}>
                            <FormGroup className={ (errors.name == "" ? "" : "has-danger")}>
                                <Label for="contactName" 
                                className="contact-label">Name
                                 <span className="error">{(errors.name == "" ? "" : errors.name)}</span></Label>
                                <Input
                                type="name"
                                name="name"
                                id="contactName"
                                placeholder="Your Name"
                                onChange={handleInputField}
                                />
                            </FormGroup>
                                </Col>
                                <Col md={6} sm = {12}>
                            <FormGroup className={ (errors.email == "" ? "" : "has-danger")}>
                                <Label for="contactEmail" 
                                className="contact-label">E-mail
                                 <span className="error">{(errors.email == "" ? "" : errors.email)}</span></Label>
                                <Input
                                type="email"
                                name="email"
                                id="contactEmail"
                                placeholder="Your Email"
                                autoComplete="off"
                                onChange={handleInputField}
                                />
                                </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                    <Col>
                                <FormGroup className={ (errors.message == "" ? "" : "has-danger")}>
                                <Label for="contactMessage" 
                                className="contact-label">Message
                                 <span className="error">{(errors.message == "" ? "" : errors.message)}</span></Label>
                                <Input
                                type="message"
                                name="message"
                                id="contactMessage"
                                placeholder="Tell us more!"
                                autoComplete="off"
                                onChange={handleInputField}
                                />
                                </FormGroup>
                                </Col>
                                </Row>
                            <Button color="info" type="button" className="submit-btn"
                            onClick={validateForm} >
                                Submit
                            </Button>
                            <div className="submit-success" style={{color: "white"}}>
                            {((errors.message == "" && errors.name == "" && errors.email == "" && clicked > 0 )? "Great! We'll get in touch soon :D" : " ")}
                            </div>
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