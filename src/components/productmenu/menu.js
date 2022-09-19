import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

function ProductMenu() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Working & Safety Gloves"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Assembly Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cotton Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Driver & TPR Driver
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Fire & Heat Resistant
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Fireman Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Interlock Fabric Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Rope Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Welding Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Work and Industrial Gloves
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mechanic Gloves" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                General Purpose
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Impact Resistant Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Mechanic Utility Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Safety Gloves
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sports Gloves" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Cycling cut finger Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Anti Vibration & Chain Saw Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Baseball Batting Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Cycling full finger Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Dress and Fashion Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Goal Keeper Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Lineman Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Motorbike Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Riding Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ski Gloves</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Law & Enforcement Gloves"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Anti Riot Tectical Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Military Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Police Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Shooing Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Tactical Gloves
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fitness Gloves" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Men Fitness Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Women Fitness Gloves
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProductMenu;
