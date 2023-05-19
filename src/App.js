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
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="mixed" element={<MixedPage />} />
            </Routes>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
