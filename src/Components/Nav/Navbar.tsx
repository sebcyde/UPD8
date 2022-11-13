import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Assets/Logos/UpdateLogo.png';
import { Link, useLocation } from 'react-router-dom';
import { NavbarScrollerContainer } from '../../Styles/AllComponents';
import Scroller from './Scroller';

const ContainerStyle = {
	display: y
	
};

const NavStyle = {
	backgroundColor: 'black',
	color: 'white',
	display: 'flex',
	marginBottom: 'none',
};

const NavLogoStyle = {
	height: 'fit-content',
	display: 'flex',
	alignItems: 'center',
	color: 'white',
};

const NavItemStyle = {
	color: ' white',
	textDecoration: 'none',
	padding: '5px',
};

const NavLocation = {
	fontSize: '15px',
	margin: '0px',
	marginLeft: '5px',
};

function NavBar() {
	const [UpdateCounter, setUpdateCounter] = useState<number>(5);

	function capitalize(word: string) {
		if (word === '/') {
			return;
		}
		return word[1].toUpperCase() + word.substring(2).toLowerCase();
	}

	const CurrentLocation = capitalize(useLocation().pathname);

	return (
		<div style={ContainerStyle}>
			<Navbar
				variant="dark"
				expand="lg"
				collapseOnSelect={true}
				style={NavStyle}
			>
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
							<h3 style={NavLocation}>
								{CurrentLocation !== undefined ? `/ ${CurrentLocation}` : null}
							</h3>
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
							<Nav.Link
								eventKey="1"
								as={Link}
								to="japanese"
								style={NavItemStyle}
							>
								Japanese
							</Nav.Link>
							<Nav.Link eventKey="1" as={Link} to="/" style={NavItemStyle}>
								Dashboard
							</Nav.Link>
							<Nav.Link
								eventKey="1"
								as={Link}
								to="settings"
								style={NavItemStyle}
							>
								Settings
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<NavbarScrollerContainer style={{ overflow: 'hidden', width: '100vw' }}>
				<Scroller Updates={UpdateCounter} />
			</NavbarScrollerContainer>
		</div>
	);
}

export default NavBar;
