import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas, Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const XL_SIZE = "xl";
function OffcanvasExample() {
  const [expand] = useState(XL_SIZE);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  const navbarProps = {
    bg: "dark",
    variant: "dark",
    expand: expand,
    className: "mb-3",
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  function DropdownMenu({ unit }) {
    return (
      <Dropdown key={unit}>
        <Dropdown.Toggle variant="dark" id={`dropdown-basic-${unit}`}>
          Unidad {unit}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            href={`/Aprender/Unidad${unit}`}
            active={currentPage === `/Aprender/Unidad${unit}`}
          >
            Aprender
          </Dropdown.Item>
          <Dropdown.Item
            href={`/Guias/Unidad${unit}`}
            active={currentPage === `/Guias/Unidad${unit}`}
          >
            Guia
          </Dropdown.Item>
          <Dropdown.Item
            href={`/Pruebas/Unidad${unit}`}
            active={currentPage === `/Pruebas/Unidad${unit}`}
          >
            Pruebas
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <>
      <Navbar {...navbarProps}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://raw.githubusercontent.com/pipetboy2001/Sistemas-Operativos-Page/423a0eaf3327f764d26fe9cc467e987ec529443d/public/sistope.svg"
              width="30"
              height="30"
              alt="S.O"
            />{' '}
            Sistemas Operativos
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menú de navegación
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {[1, 2, 3].map((unit) => (
                  <DropdownMenu key={unit} unit={unit} />
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
