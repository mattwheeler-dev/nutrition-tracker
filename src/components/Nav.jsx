import { FaBarsStaggered } from "react-icons/fa6";
import "../assets/styles/Nav.css";

const Nav = () => {
	return (
		<nav>
			<FaBarsStaggered />
			<p>Nutrition Tracker</p>
			<p className="sign-in">Sign Up / Sign In</p>
		</nav>
	);
};

export default Nav;
