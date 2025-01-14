import { FaRegCopyright, FaGlobe, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer>
			<p>
				Find me: <FaGlobe /> <FaLinkedin /> <FaGithub />
			</p>
			<p>
				<FaRegCopyright />
				MattWheeler-Dev 2025
			</p>
		</footer>
	);
};

export default Footer;
