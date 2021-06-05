import React from 'react';
import * as bootstrap from 'react-bootstrap';

export default function Navheader() {
    return (
        <div className="navclass">
            <bootstrap.Navbar className="navcolor" expand="lg" bg='light' variant="light">
                <bootstrap.Navbar.Brand href="/">Logo</bootstrap.Navbar.Brand>
                    <bootstrap.Nav className="mr-auto">
                                <bootstrap.Nav.Link className="link"  bg="dark" href="/home">Home</bootstrap.Nav.Link>
                                <bootstrap.Nav.Link className="link" fontFamily="Roboto" href="/task">Tasks</bootstrap.Nav.Link>
                                <bootstrap.Nav.Link className="link" href="/user">User</bootstrap.Nav.Link>
                    </bootstrap.Nav>
            </bootstrap.Navbar>
        </div>
    )
}
