import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';

const Experience = () => {
	return (
		<div
			name="experience"
			className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div>
					<p>Experience</p>
					<p>these are technologies I've worked with</p>
				</div>

				<div>
					<div>
						<img src={html} alt="" />
						<p>HTML</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
