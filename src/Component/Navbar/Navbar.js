import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

export default function NavbarScroll({ filterbySearch }) {
  const [searchvalue, setsearchvalue] = useState("");
  const onSearch = () => {
    filterbySearch(searchvalue);
    setsearchvalue("");
  };
  return (
    <div>
      <>
        <Navbar expand="lg" className="bg-dark">
          <Container>
            <Navbar.Brand id="brand" href="#">
              مطعم جديد
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px", border: "solid 1px white" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="بحث"
                  className="me-2"
                  onChange={(e) => setsearchvalue(e.target.value)}
                  value={searchvalue}
                />
                <Button
                  onClick={() => onSearch()}
                  id="btn-nav"
                  variant="outline-warning"
                >
                  بحث
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
