import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
    return (
        <>
        {["md"].map((expand) => (
        <Navbar
            key={expand}
            bg="dark"
            variant="dark"
            expand={expand}
            className="mb-3">
            <Container fluid>
                <Navbar.Brand href="/">Sistemas Operativos </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                            <Nav.Link href="/Aprender">Aprender¿?</Nav.Link>
                            <Nav.Link href="/Peps">PEPS anteriores</Nav.Link>
                            <Nav.Link href="/Guias">Guias Anteriores</Nav.Link>
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
