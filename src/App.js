import { Col, Row, Container } from "reactstrap";
import "./App.css";
// import MovieCard from "./Components/MovieCard";
import { RandomMoviePage } from "./pages/RandomMoviepage";
// import { MOVIES } from "./app/shared/MOVIES.js";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.css";
import { MainPage } from "./pages/MainPage";
import MixedPage from "./pages/MixedPage";
import DetailedCard from "./Components/DetailedCard";
import { MOVIES } from "./app/shared/MOVIES";
import { SelectedMoviePage } from "./pages/SelectedMoviePage";

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <Container>
                <Row>
                    {/* <MainPage /> */}
                    {/* <RandomMoviePage /> */}
                    {/* <SelectedMoviePage /> */}
                    <MixedPage />
                </Row>
            </Container>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
