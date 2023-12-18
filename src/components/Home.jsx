import React from 'react';
import HeroImage from '../assets/hero-img.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
		>
			<div>
				<div>
					<h2>I'm a Full Stack Developer</h2>
					<p>
						I have 2 years of experience building and desgining software.
						Currently, I love to work on web application using technologies like
						React, Typescript, Tailwind, Express JS and postgreSQL.
					</p>

					<div>
						<button>
							Portfolio
							<span>
								<MdOutlineKeyboardArrowRight />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
