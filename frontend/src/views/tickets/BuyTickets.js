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

function BuyTickets(state) {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: ""
    })
    const [clicked, setClicked] = useState(0)
    const [payment, setPayment] = useState(0)
    const [agreement, setAgreement] = useState(false)
    const [errors, setErrors] = useState({
        email : "",
        name : "",
        phone : "",
        agreement: "",
        payment : ""
    })

    const validateForm = async () => {
        var error = {
            email : "",
            name : "",
            phone : "",
            agreement: "",
            payment : ""
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
        if(data.phone.length == 0 ){
            error.phone = "You must say something !"
        }else {
            error.phone = ""
        }
        if( payment == 0 ){
            error.payment = "You must choose a payment method !"
        }else {
            error.payment = ""
        }
        if( agreement == false){
            error.agreement = "You must agree to our terms !"
        }else {
            error.agreement = ""
        }

        await setErrors(error)
        setClicked(clicked + 1)
    }
    function validateEmail (email) {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
      }

    useEffect(() => {
        console.log(state.location.state)
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
                                { state == null ? (null) : (<div>
                <Row>
                    <Col md={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <img className="img-fluid rounded shadow-lg" src={state.location.state.posterurl} alt="Logo"  style={{maxHeight: "250px"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col md = {12} className="movie-info-holder">
                        <div className="movie-title">{state.location.state.title}</div>
                        <div className="movie-genre">
                            <Badge color="simple">{state.location.state.genres[0]}</Badge>
                            <Badge color="simple">{state.location.state.genres[1]}</Badge>
                        </div>
                    </Col>
                    <Col md={12}>
                    <div className="movie-description">
                            {state.location.state.storyline} 
                        </div>
                    </Col>
                </Row></div>) }
                            </div>
                        </Col>
                        <Col md={6}>
                            <form>
                                    <Row>
                                        <Col>
                                <FormGroup className={ (errors.name == "" ? "" : "has-danger")}>
                                            <Label for="ticketName"
                                                className="contact-label">Full Name</Label>
                                            <Input
                                                type="name"
                                                name="name"
                                                id="contactName"
                                                placeholder="Who do we address the ticket to?"
                                                onChange={handleInputField}
                                            />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                <FormGroup className={ (errors.phone == "" ? "" : "has-danger")}>
                                            <Label for="contactPhone"
                                                className="contact-label">Telephone</Label>
                                            <Input
                                                type="phone"
                                                name="phone"
                                                id="contactPhone"
                                                placeholder="How do we get in touch?"
                                                autoComplete="off"
                                                onChange={handleInputField}
                                            />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>

                                <FormGroup className={ (errors.email == "" ? "" : "has-danger")}>
                                            <Label for="contactEmail"
                                                className="contact-label">E-mail</Label>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="contactEmail"
                                                placeholder="Where do we send the receipt?"
                                                autoComplete="off"
                                                onChange={handleInputField}
                                            />
                                            </FormGroup></Col>
                                    </Row>
                                    <Row>
                                            <Label for="contactEmail" className="contact-label">
                                                Payment Method
                                            </Label>
                                        <Col><Button className="btn-round btn-icon" color={ ( payment == 1 ? "success" : "neutral") } onClick={()=> setPayment(1)}>
                                            <i className="tim-icons icon-basket-simple" />
                                            </Button>
                                        </Col>
                                        <Col><Button className="btn-round btn-icon"  color={ ( payment == 2 ? "success" : "neutral") } onClick={()=> setPayment(2)}>
                                            <i className="tim-icons icon-cart" />
                                            </Button>
                                        </Col>
                                        <Col><Button className="btn-round btn-icon"  color={ ( payment == 3 ? "success" : "neutral") }  onClick={()=> setPayment(3)}>
                                            <i className="tim-icons icon-bag-16" />
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Col><br></br></Col>
                                    <Row>
                                        <Col>
                                        <Label check>
                                            <Input type="checkbox" onClick={() => setAgreement(!agreement)}/>{""}I agree to the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> terms and services set forth </a>                               
                                            </Label>
                                            <div>
                                                <span style={{color: "red"}}>
                                                { (errors.agreement == "" ? "" : errors.agreement)}
                                                    </span></div>
                                        </Col>
                                    </Row>

                                <Button color="success" type="button" className="submit-btn" style={{marginTop:"15px"}}
                                onClick={()=> validateForm()}>
                                    Purchase
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

