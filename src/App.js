import { Col, Row, Container } from "reactstrap";
import "./App.css";
// import MovieCard from "./Components/MovieCard";
import MovieList from "./Lists/MovieList";
// import { MOVIES } from "./app/shared/MOVIES.js";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.css";

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <Container>
                <Row>
                    <MovieList />
                </Row>
                {/* <Row>
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
                <br></br>
                <Row>
                    <Col>
                        <MovieCard movie={MOVIES[4]} />
                    </Col>
                    <Col>
                        <MovieCard movie={MOVIES[5]} />
                    </Col>
                    <Col>
                        <MovieCard movie={MOVIES[6]} />
                    </Col>
                    <Col>
                        <MovieCard movie={MOVIES[7]} />
                    </Col>
                </Row> */}
            </Container>
            <Footer />
        </div>
    );
}

export default App;
