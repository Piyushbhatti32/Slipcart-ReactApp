import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

function Header({ cartCount = 0, products }) {
  const navigate = useNavigate();

  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategorySelect = (category) => {
    navigate(`/?category=${category}`);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary sticky-top w-100"
      data-bs-theme="light"
    >
      <Container fluid>
        <Navbar.Brand className="text-black fw-bold" as={Link} to="/">
          <strong className="text-primary" style={{ fontSize: "30px" }}>
            S
          </strong>
          lip
          <strong className="text-primary" style={{ fontSize: "30px" }}>
            C
          </strong>
          art
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="w-100 my-2 my-lg-0"
            variant="underline"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <div className="d-flex justify-content-between w-100 mx-2">
              <div className="d-flex gap-3">
                <Nav.Link as={Link} to="/" key="home">
                  Home
                </Nav.Link>
                <NavDropdown title="Smartphones" id="basic-nav-dropdown">
                  {categories.map((category) => (
                    <NavDropdown.Item
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link as={Link} to="/contact" key="contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/about" key="about">
                  About
                </Nav.Link>
              </div>
              <Nav.Link as={Link} to="/cart" key="cart">
                My Cart
                <Badge bg="secondary" className="ms-1">
                  {cartCount}
                </Badge>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.defaultProps = {
  title: "My App",
};

Header.propTypes = {
  title: PropTypes.string,
  cartCount: PropTypes.number,
  products: PropTypes.array.isRequired,
};

export default Header;
