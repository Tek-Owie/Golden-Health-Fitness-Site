import React from "react"
import {Navbar, Nav} from "react-bootstrap"
import {useStaticQuery, Link, graphql} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faIdBadge, faClipboardList, faHome } from '@fortawesome/free-solid-svg-icons'

export const Navs = () => {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "BG Main.png"}) {
                publicURL
            }
        }
    `)

    return (
        <Navbar collapseOnSelect expand="sm" style={{backgroundColor: "hsl(227,2%,12%)"}} variant="dark" fixed="top">
            <Link to="/" className="navbar-brand">
            <img
                src={data.logo.publicURL}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Golden Health & Fitness logo"
            />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/" className="nav-link" activeClassName="active"><FontAwesomeIcon icon={faHome} variant="dark"/>  Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/About" className="nav-link" activeClassName="active"><FontAwesomeIcon icon={faIdBadge} variant="dark"/>  About Us</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/Services" className="nav-link" activeClassName="active"><FontAwesomeIcon icon={faClipboardList} variant="dark"/> Services</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/Contact" className="nav-link" activeClassName="active"><FontAwesomeIcon icon={faAddressBook} variant="dark"/>    Contact Us</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
