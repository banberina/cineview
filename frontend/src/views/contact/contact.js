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
            <Label for="exampleEmail" className="contact-label">Name</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter email"
            />
                  </Col>
                  <Col>
            <Label for="examplePassword" className="contact-label">E-mail</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              autoComplete="off"
            /></Col>
              </Row>
              <Row>
                  <Col>
            <Label for="examplePassword" className="contact-label">Message</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
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