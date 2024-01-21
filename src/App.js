import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<SocialLinks />
		</div>
	);
}

export default App;
