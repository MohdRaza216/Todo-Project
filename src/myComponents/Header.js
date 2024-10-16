import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react'
import  propTypes  from 'prop-types';


function Header({title = "Your title here!", searchBar = true, })
 {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                    {searchBar ? <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> : ""}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

// Header.defaultProps = {
//     title : "Your title here!",
//     searchBar : false
// }

Header.propTypes = {
    title : propTypes.string ,
    searchBar : propTypes.bool.isRequired 
}

