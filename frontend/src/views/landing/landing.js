import React, { useState, useCallback, useEffect} from "react";
import { Col, Row, Container, Progress, Badge} from 'reactstrap';
import {
  Card, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
} from 'reactstrap';
import { UncontrolledCarousel } from "reactstrap";
import bannerImage from "../../assets/img/banner.jpg"
import inTheatre from "../../movies/json/movies-in-theaters.json"
import './landing.css'

function LandingScreen() {

    const [currentDay, setCurrentDay] = useState(1)

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
                    <img className="poster-wrapper" src={movie.posterurl} alt="Logo" />
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
                            <span className="movie-rated-as">{movie.contentRating == "" ? ("No limitations") : ("Rated " + movie.contentRating)}</span>
                        </div>
                    </Col>
                    <Col md={2} className="timetable-holder">
                        <Badge color="info" className="timetable-badge">09:50</Badge>
                        <Badge color="info" className="timetable-badge">11:30</Badge>
                        <Badge color="info" className="timetable-badge">13:00</Badge>
                        <Badge color="info" className="timetable-badge">17:45</Badge>
                        <Badge color="info" className="timetable-badge">22:00</Badge>
                        <Button className="btn-round btn-icon buy-now-icon" color="success">
                            <i className="tim-icons icon-gift-2" />
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
        </div>
        </>
    )
}

export default LandingScreen;