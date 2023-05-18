import { Button, Container, Row, Col } from "reactstrap";
import DetailedCard from "../Components/DetailedCard";
import { useState } from "react";
import { selectRandomMovie } from "../app/features/moviesSlice";

export const RandomMoviePage = () => {
    const [selectedMovie, toggleMovie] = useState(selectRandomMovie());

    return (
        <Container>
            <Row>
                <Col>
                    <Button onClick={() => toggleMovie(selectRandomMovie())}>
                        New Movie
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DetailedCard movie={selectedMovie} />
                </Col>
            </Row>
        </Container>
    );
};
