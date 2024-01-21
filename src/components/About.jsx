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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					ipsam, rerum ratione doloribus molestiae veniam quia expedita adipisci
					voluptates ullam et officia voluptas incidunt libero ducimus id
					excepturi hic mollitia sunt soluta obcaecati iusto! Nulla fugit
					distinctio architecto nesciunt? Consequatur assumenda reprehenderit
					perferendis in. Incidunt commodi eaque quae voluptates placeat.
				</p>

				<br />

				<p className="text-xl">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsa
					aspernatur eius quas distinctio nobis deleniti doloremque facilis rem,
					non sunt. Veniam sit culpa natus dignissimos doloribus voluptate ipsum
					voluptates aliquam fugiat harum! Provident est omnis dolorem eos
					deserunt quia doloremque, itaque doloribus odit distinctio culpa, rem
					ipsum quod error.
				</p>
			</div>
		</div>
	);
};

export default About;