import { NavLink } from "react-router-dom";
import { useNutritionStore } from "../state/nutritionStore";
import type { MealType } from "../types/nutrition";

const navItems = [
	{ name: "Home", to: "/" },
	{ name: "Dashboard", to: "/dashboard" },
	{ name: "History", to: "/history" },
	{ name: "Profile", to: "/profile" },
];

const Navbar = () => {
	const searchQuery = useNutritionStore((s) => s.searchQuery);
	const setSearchQuery = useNutritionStore((s) => s.setSearchQuery);
	const selectedMeal = useNutritionStore((s) => s.selectedMeal);
	const setSelectedMeal = useNutritionStore((s) => s.setSelectedMeal);

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

			<div className="flex gap-2 items-center">
				<input
					type="text"
					placeholder="Search foods..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="p-2 border rounded"
				/>

				<select
					value={selectedMeal}
					onChange={(e) => setSelectedMeal(e.target.value as MealType)}
					className="p-2 border rounded"
				>
					<option value="breakfast">Breakfast</option>
					<option value="lunch">Lunch</option>
					<option value="dinner">Dinner</option>
					<option value="snacks">Snacks</option>
				</select>
			</div>
		</nav>
	);
};

export default Navbar;
