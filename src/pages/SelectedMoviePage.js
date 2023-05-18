import { Button, Container, Row, Col } from "reactstrap";
import DetailedCard from "../Components/DetailedCard";
import { useState } from "react";
import { selectMovieById } from "../app/features/moviesSlice";

export const SelectedMoviePage = () => {
    const [movieId, setMovieId] = useState(0);
    const selectedMovie = selectMovieById(movieId);
    return (
        <Container>
            <Row>
                <Col>
                    <DetailedCard movie={selectedMovie} />
                </Col>
            </Row>
        </Container>
    );
};
