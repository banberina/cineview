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
import './about.css'

function AboutScreen() {

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
                    <Col  md={6} className="about-large-text">
                        Where there is film, there is passion
                    </Col>
                    <Col  md={6} style={{padding:"32px"}}  className="about-text">
                        <p2>
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                        </p2>
                    </Col>
                </Row>
                <Row style={{marginTop:"75px"}}>
                    <Col md={6}  className="about-large-text">
                        Where there is passion, there is happiness
                    </Col>
                    <Col md={6} style={{padding:"32px"}}   className="about-text">
                        <p2>
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                            Lorem ipsum dolor sit amet, veni vidi vici.
                        </p2>
                    </Col>
                </Row>
                {/* <Row>
                    <Col className="end-text">
                        Where there is happiness, there are memories
                    </Col>
                </Row> */}
            </Container>
        </div>
        </>
    )
}

export default AboutScreen;