import logo from "../app/assets/img/LetterboxdLogo.png";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";
import { Button } from "reactstrap";

const MainHeader = () => {
    return (
        <Navbar dark>
            <NavbarBrand>
                {/* <img src={logo} alt="logo" className="float-start" /> */}
                <h1 className="mt-1">Movie Logger</h1>
            </NavbarBrand>
            <Button className="btn btn-primary">Button</Button>
        </Navbar>
    );
};

export default MainHeader;
