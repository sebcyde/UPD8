import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Assets/Logos/UpdateLogo.png';
import { Link } from 'react-router-dom';

const NavStyle = {
	backgroundColor: 'black',
	color: 'white',
	borderBottom: '1px solid green',
	display: 'flex',
};

const NavLogoStyle = {
	height: 'fit-content',
	display: 'flex',
	alignItems: 'center',
};

const NavItemStyle = {
	color: ' rgba(255,255,255,.55)',
	textDecoration: 'none',
	padding: '5px',
};

function NavBar() {
	return (
		<Navbar variant="dark" expand="lg" collapseOnSelect={true} style={NavStyle}>
			<Container>
				<Navbar.Brand href="#home">
					<span style={NavLogoStyle}>
						<img src={Logo} style={{ height: '20px' }} />
						<h2
							style={{
								height: 'fit-content',
								margin: '0px',
								marginLeft: '5px',
								fontSize: '20px',
							}}
						>
							UPD8
						</h2>
					</span>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					style={{ border: 'none' }}
				/>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						{/* <Nav.Link eventKey="1" as={Link} to="menu" style={NavItemStyle}>
							Menu
						</Nav.Link> */}
						<Nav.Link eventKey="1" as={Link} to="search" style={NavItemStyle}>
							Search
						</Nav.Link>

						<Nav.Link eventKey="1" as={Link} to="news" style={NavItemStyle}>
							News
						</Nav.Link>
						<Nav.Link eventKey="1" as={Link} to="japanese" style={NavItemStyle}>
							Japanese
						</Nav.Link>
						<Nav.Link eventKey="1" as={Link} to="/" style={NavItemStyle}>
							Dashboard
						</Nav.Link>
						<Nav.Link eventKey="1" as={Link} to="settings" style={NavItemStyle}>
							Settings
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
