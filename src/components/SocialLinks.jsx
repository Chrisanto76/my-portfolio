import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					linkedIn <FaLinkedin size={30} />
				</>
			),
			href: 'https://www.linkedin.com/in/antony-poure-874297232/',
			style: 'rounded-tr-md',
		},
		{
			id: 2,
			child: (
				<>
					Github <FaGithub size={30} />
				</>
			),
			href: 'https://github.com/Chrisanto76',
		},
		{
			id: 3,
			child: (
				<>
					Mail <HiOutlineMail size={30} />
				</>
			),
			href: 'mailto:antonypoure2@gmail.com',
		},
		{
			id: 4,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: './resume.pdf',
			style: 'rounded-br-md',
			download: true,
		},
	];

	return (
		<div className="flex flex-col top-[35%] left-0 fixed">
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"
					>
						<a
							href={href}
							className={
								// eslint-disable-next-line no-useless-concat
								'flex justify-between items-center w-full text-white' +
								' ' +
								style
							}
							download={download}
							target="_blank"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
