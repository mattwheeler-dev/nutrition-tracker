import { FaRegCopyright, FaGlobe, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer>
			<p>
				Find me:
				<a href="https://mattwheeler-dev.com/" target="_blank">
					<FaGlobe />
				</a>
				<a href="https://www.linkedin.com/in/mattwheeler-dev/" target="_blank">
					<FaLinkedin />
				</a>
				<a href="https://github.com/mattwheeler-dev" target="_blank">
					<FaGithub />
				</a>
			</p>
		</footer>
	);
};

export default Footer;
