import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img className="nav__logo" src="../../NetFlixLogo.png" alt="Netflix Logo" />
			<img className="nav__avatar" src="../../Netflix-avatar.png" alt="NetFlix Avatar" />
		</div>
	);
}

export default Nav;
