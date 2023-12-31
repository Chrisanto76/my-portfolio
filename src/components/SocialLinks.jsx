import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';

const SocialLinks = () => {
	return (
		<div className="flex flex-col top-[35%] left-0 fixed">
			<ul>
				<li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
					<a
						href="https://www.linkedin.com/in/antony-poure-874297232/"
						className="flex justify-between items-center w-full text-white"
					>
						<>
							LinkedIn <FaLinkedin size={30} />
						</>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SocialLinks;
