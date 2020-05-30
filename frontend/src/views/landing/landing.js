import React, { useState, useCallback, useEffect} from "react";
import { Col, Row, Container, Progress, Badge} from 'reactstrap';
import {
  Card, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
} from 'reactstrap';
import{ Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UncontrolledCarousel } from "reactstrap";
import bannerImage from "../../assets/img/banner.jpg"
import inTheatre from "../../movies/json/movies-in-theaters.json"
import './landing.css'
import {Redirect} from 'react-router-dom'

function LandingScreen() {

    const [currentDay, setCurrentDay] = useState(1)
    const [buyClicked, setBuyClicked] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [modalData, setModalData] = useState({
        title : "",
        description: "",
        image: "",
        rating: "",
        genre: [],
        actors: ""
    })

    useEffect(() => { 
        inTheatre.sort(function() {
            return .5 - Math.random();
          });
    },[currentDay]);

    function isActive(day){
        if(day == currentDay){
            return "btn-info"
        }
        return "btn-simple"
    }

    const carouselItems = [
        {
          src:
          "https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/08/it_chapter_two_ver7_xlg.jpg?ssl=1",
          altText: "Slide 1",
          caption: ""
        },
        {
          src:
          "https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/08/it_chapter_two_ver6_xlg.jpg?ssl=1",
          altText: "Slide 2",
          caption: ""
        },
        {
          src:
          bannerImage,
          altText: "Slide 3",
          caption: ""
        }
      ];

      const movies = inTheatre.map( (movie) => 
            <Col md={12} className="movie-info-card">
                <Row>
                    <Col md={2}>
                    <img className="img-fluid rounded shadow-lg" style={{maxHeight:"250px"}}
                    src={movie.posterurl} alt="Logo"  onClick={() => {
                        setOpenModal(true)
                        setModalData({
                            title : movie.title,
                            description: movie.storyline,
                            image: movie.posterurl,
                            rating: movie.imdbRating,
                            genre: movie.genres,
                            actors: movie.actors
                        })
                    }}/>
                    </Col>
                    <Col md = {8} className="movie-info-holder">
                        <div className="movie-title">{movie.title}</div>
                        <div className="movie-genre">
                            <Badge color="simple">{movie.genres[0]}</Badge>
                            <Badge color="simple">{movie.genres[1]}</Badge>
                        </div>
                        <div className="movie-actors">
                            {movie.actors[0]}, {movie.actors[1]}, {movie.actors[2]}
                        </div>
                        <div className="movie-description">
                            {movie.storyline.substring(0, 222) + "..."}
                        </div>
                        <div className="movie-rating">
                            <i className="tim-icons icon-shape-star" /> {movie.imdbRating == "" ? ("None") : (movie.imdbRating)}
                            <span className="movie-rated-as">{movie.contentRating == "" ? 
                                                        ("No limitations") : ("Rated " + movie.contentRating)}
                                    </span>
                        </div>
                    </Col>
                    <Col md={2} className="timetable-holder">
                        <Badge color="info" className="timetable-badge">09:50</Badge>
                        <Badge color="info" className="timetable-badge">11:30</Badge>
                        <Badge color="info" className="timetable-badge">13:00</Badge>
                        <Badge color="info" className="timetable-badge">17:45</Badge>
                        <Badge color="info" className="timetable-badge">22:00</Badge>
                        <Button className="btn-round btn-icon buy-now-icon" color="info" onClick={() => setBuyClicked(!buyClicked)}>
                            { buyClicked ? (<Redirect to={{ pathname: "/tickets", state: movie}}/>) :(null)}
                            <i className="tim-icons icon-coins" />
                        </Button>
                    </Col>
                </Row>
            </Col>
      )

    return (
        <>
        <div className="view-holder">
            <Container>
                <Row>
                    <Col md={12} className="featured-movies">
                        Featured Movies
                    </Col>
                </Row>
                <Row>
                    <Col md = {12} style={{maxHeight:'400px'}}>
                    <UncontrolledCarousel items={carouselItems} />
                    </Col>
                </Row>
                <Row  className = "card-parent">
                </Row>
                <Row>
                    <Col md={12}>
                        <Card>
                        <CardHeader>
                            <Row className="day-picker-holder">
                            <Button className={isActive(1)} color="info" onClick={ () => setCurrentDay(1)}>
                                Monday
                            </Button>
                            <Button className={isActive(2)} color="info" onClick={ () => setCurrentDay(2)}>
                                Tuesday
                            </Button>
                            <Button className={isActive(3)} color="info" onClick={ () => setCurrentDay(3)}>
                                Wednesday
                            </Button>
                            <Button className={isActive(4)} color="info" onClick={ () => setCurrentDay(4)}>
                                Thursday
                            </Button>
                            <Button className={isActive(5)} color="info" onClick={ () => setCurrentDay(5)}>
                                Friday
                            </Button>
                            <Button className={isActive(6)} color="info" onClick={ () => setCurrentDay(6)}>
                                Saturday
                            </Button>
                            <Button className={isActive(7)} color="info" onClick={ () => setCurrentDay(7)}>
                                Sunday
                            </Button>
                            </Row>
                        </CardHeader>
                            <CardBody>
                                <Container>
                                    <Row>
                                        {movies}
                                    </Row>
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal isOpen={openModal} toggle={()=> setOpenModal(!openModal)} backdrop={true} className="movie-modal">
                <ModalBody>
                <Row>
                    <Col md={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <img className="img-fluid rounded shadow-lg" src={modalData.image} alt="Logo"  style={{maxHeight: "250px"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col md = {12} className="movie-info-holder">
                        <div className="movie-title">{modalData.title}</div>
                        <div className="movie-genre">
                            <Badge color="simple">{modalData.genre[0]}</Badge>
                            <Badge color="simple">{modalData.genre[1]}</Badge>
                        </div>
                    </Col>
                    <Col md={12}>
                    <div className="movie-description">
                            {modalData.description}
                        </div>
                    </Col>
                    <Col md={6}>
                    </Col>
                    <Col md={6}>
                        <div className="movie-rating" style={{float: "left"}}>
                            <i className="tim-icons icon-shape-star" /> {modalData.rating == "" ? ("None") : (modalData.rating)}
                        </div>
                    </Col>
                </Row>
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="secondary" onClick={() => setOpenModal(false)}>
                        Close
                    </Button>
                    <Button color="primary">
                        Save changes
                    </Button>
                </ModalFooter> */}
            </Modal>
        </div>
        </>
    )
}

export default LandingScreen;