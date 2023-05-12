import MovieCard from "../Components/MovieCard";
import { Col, Row } from "reactstrap";
import { MOVIES } from "../app/shared/MOVIES";

const MovieList = () => {
    return (
        <Row className="ms-auto">
            {MOVIES.map((movie) => {
                return (
                    <Col md="5" className="m-4" key={movie.id}>
                        <MovieCard movie={movie} />;
                    </Col>
                );
            })}
        </Row>
    );
};

export default MovieList;
