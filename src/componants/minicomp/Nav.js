import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Outlet, Link, } from "react-router-dom"
import Stack from 'react-bootstrap/Stack';


function OffcanvasExample() {
    // constructor(props) {
    //     super(props);

    //     this.closeNavbar = this.closeNavbar.bind(this);
    //     this.state = {
    //         isOpen: false
    //     };
    // }

   const closeNavbar = ()=> {
        this.setState({
            isOpen: false
        });
    }
  return (
    <div className=''>
      {[false, ].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
          
            <Navbar.Brand href="/"> <img src={process.env.PUBLIC_URL + "/wignoug.jpg"} alt='image' min-width="150" height="50px"></img></Navbar.Brand>
          
             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Self Learning
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                  <div className='container'>
                  <Nav.Link className="nav-link active pe-5" aria-current="page" href="/" closeButton>Home</Nav.Link>
                  <Nav.Link href="/community">IGNOU Community</Nav.Link>
                  <Nav.Link href="/Ask">Ask</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="ask">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                     
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  </div>
                </Nav>
                <div className='container mt-4 border-top '>
                <h5 className='mt-1'>Account</h5>
                <div className="vr" />
                <Link to="/login" onClick={closeNavbar}>
                <Button variant="outline-info ps-4 pe-4 mt-3 me-3" > Login </Button>
                </Link>
                <Link to="/signup" onClick={closeNavbar}>
                <Button variant="outline-success ps-4 pe-4 mt-3 me-2">Signup</Button>
                </Link>
                </div>
                
               
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                 
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
      <Outlet/>
    </div>
  );
}

export default OffcanvasExample;