import MovieCard from "../Components/MovieCard";
import { Col, Row } from "reactstrap";
import { selectAllMovies } from "../app/features/moviesSlice";

const MovieList = () => {
    const movies = selectAllMovies();

    return (
        <Row className="ms-auto">
            {movies.map((movie) => {
                return (
                    <Col key={movie.id}>
                        <MovieCard movie={movie} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default MovieList;
