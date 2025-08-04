import { NavLink } from "react-router-dom";

const navItems = [
	{ name: "Home", to: "/" },
	{ name: "Dashboard", to: "/dashboard" },
	{ name: "History", to: "/history" },
	{ name: "Profile", to: "/profile" },
];

const Navbar = () => {
	return (
		<nav className="bg-white shadow px-4 py-3 flex gap-6 items-center">
			{navItems.map(({ name, to }) => (
				<NavLink
					key={to}
					to={to}
					className={({ isActive }) =>
						isActive
							? "text-blue-600 font-semibold"
							: "text-gray-600 hover:text-blue-500"
					}
				>
					{name}
				</NavLink>
			))}
		</nav>
	);
};

export default Navbar;
