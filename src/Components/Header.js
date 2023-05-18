import logo from "../app/assets/img/LetterboxdLogo.png";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";

const Header = () => {
    return (
        <Navbar dark>
            <NavbarBrand>
                <h1 className="mt-1">📽 Movie Logger</h1>
            </NavbarBrand>
            <NavbarToggler />
        </Navbar>
    );
};

export default Header;
