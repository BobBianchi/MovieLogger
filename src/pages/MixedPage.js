import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import DetailedCard from "../Components/DetailedCard";
import MovieList from "../Lists/MovieList";
import { selectMovieById } from "../app/features/moviesSlice";

const MixedPage = () => {
    const [movieId, setMovieId] = useState(0);
    const selectedMovie = selectMovieById(movieId);
    return (
        <Container>
            <Row>
                <Col sm="5" md="7">
                    <MovieList setMovieId={setMovieId} />
                </Col>
                <Col sm="7" md="5">
                    <DetailedCard movie={selectedMovie} />
                </Col>
            </Row>
        </Container>
    );
};

export default MixedPage;
