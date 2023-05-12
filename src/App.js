import { Col, Row, Container } from "reactstrap";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import { MOVIES } from "./app/shared/MOVIES.js";
import MainHeader from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.css";

function App() {
    return (
        <div className="App">
            <MainHeader />
            <Container>
                <Row>
                    <Col>
                        <MovieCard movie={MOVIES[0]} />
                    </Col>
                    <Col>
                        <MovieCard movie={MOVIES[1]} />
                    </Col>
                    <Col>
                        <MovieCard movie={MOVIES[2]} />
                    </Col>
                    <Col>
                        <MovieCard movie={MOVIES[3]} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
