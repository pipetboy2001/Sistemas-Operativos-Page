import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

function OffcanvasExample() {
    return (
      <>
        {["xl"].map((expand) => (
          <Navbar
            key={expand}
            bg="dark"
            variant="dark"
            expand={expand}
            className="mb-3"
          >
            <Container fluid>
              <Navbar.Brand href="/">Sistemas Operativos </Navbar.Brand>
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
                    Navegacion:
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Unidad 1
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="/Aprender/Unidad1">
                          Aprender
                        </Dropdown.Item>
                        <Dropdown.Item href="/Guias/Unidad1">
                          Guia
                        </Dropdown.Item>
                        <Dropdown.Item href="/Pruebas/Unidad1">
                          Pruebas
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Unidad 2
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="/Aprender/Unidad2">
                          Aprender
                        </Dropdown.Item>
                        <Dropdown.Item href="/Guias/Unidad2">
                          Guia
                        </Dropdown.Item>
                        <Dropdown.Item href="/Pruebas/Unidad2">
                          Pruebas
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Unidad 3
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="/Aprender/Unidad3">
                          Aprender
                        </Dropdown.Item>
                        <Dropdown.Item href="/Guias/Unidad3">
                          Guia
                        </Dropdown.Item>
                        <Dropdown.Item href="/Pruebas/Unidad3">
                          Pruebas
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Link href="/About">Sobre este proyecto</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
}

export default OffcanvasExample;
