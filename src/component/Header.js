import React from 'react'
import {  Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Link to="/" className="navbar-brand">쥬드만세</Link>
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">종학공간</Link>
                    <Link to="/about" className="nav-link">쥬드공간</Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        </div>
    )
}
