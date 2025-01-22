import { useContext } from "react";
import { AppContext } from "../App";
import { FaBarsStaggered } from "react-icons/fa6";
import "../assets/styles/Nav.css";

const Nav = () => {
	const { loggedIn, setLoggedIn } = useContext(AppContext);

	const logIn = () => {
		setLoggedIn(!loggedIn);
	};

	return (
		<nav>
			<FaBarsStaggered />
			<p>Nutrition Tracker</p>
			<p className="sign-in" onClick={logIn}>
				Sign Up / Sign In
			</p>
		</nav>
	);
};

export default Nav;
