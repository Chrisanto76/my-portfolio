import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<SocialLinks />
		</div>
	);
}

export default App;
