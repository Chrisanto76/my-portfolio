import React from 'react';

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p
						className="text-4xl font-bold inline border-b-4 bg
                    border-gray-500"
					>
						About
					</p>
				</div>
				<p className="text-xl mt-20">
					Anciennement étudiant a l'école 42 de paris, je recherche un stage
					dans le développement web front-end ou back-end, avec une préférence
					pour le langage JavaScript, et son framework react.js.
				</p>

				<br />

				<p className="text-xl">
					Actuellement je monte en compétences sur TypeScript et Mobx state
					Manager, je sais créer des applications sous Docker
					<br />
					<br />
					Ayant un intérêt tout particulier pour le design et les CMS, j'utilise
					Webflow.
					<br />
					J'ai également des notions de maquettage et prototypage avec Figma, et
					Adobe Xd.
					<br />
					Grâce à mon expérience de dirigeant je sais naturellement travailler
					en équipe.
				</p>
			</div>
		</div>
	);
};

export default About;
