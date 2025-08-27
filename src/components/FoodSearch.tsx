import { useState } from "react";
import { useNutritionStore } from "@/stores/nutritionStore";
import type { MealType, FoodItem } from "@/types/nutrition";

const mockResults: FoodItem[] = [
	{
		id: "chicken-001",
		name: "Grilled Chicken Breast",
		calories: 165,
		protein: 31,
		fat: 3.6,
		carbs: 0,
	},
	{
		id: "rice-001",
		name: "White Rice (1 cup)",
		calories: 205,
		protein: 4,
		fat: 0.4,
		carbs: 45,
	},
	{
		id: "apple-001",
		name: "Apple",
		calories: 95,
		protein: 0.5,
		fat: 0.3,
		carbs: 25,
	},
];

const FoodSearch = () => {
	const [query, setQuery] = useState("");
	const [meal, setMeal] = useState<MealType>("lunch");
	const date = useNutritionStore((s) => s.selectedDate);
	const addFood = useNutritionStore((s) => s.addFood);

	const filtered = mockResults.filter((item) =>
		item.name.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div className="mb-8 p-4 border rounded bg-white shadow">
			<h2 className="text-lg font-semibold mb-2">Food Search</h2>
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
				<input
					type="text"
					placeholder="Search foods..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="p-2 border rounded w-full sm:w-1/2"
				/>

				<select
					value={meal}
					onChange={(e) => setMeal(e.target.value as MealType)}
					className="p-2 border rounded"
				>
					<option value="breakfast">Breakfast</option>
					<option value="lunch">Lunch</option>
					<option value="dinner">Dinner</option>
					<option value="snacks">Snacks</option>
				</select>
			</div>

			{query && (
				<ul className="mt-4 space-y-2">
					{filtered.length === 0 ? (
						<li className="text-gray-500 italic">No results</li>
					) : (
						filtered.map((item) => (
							<li
								key={item.id}
								className="flex justify-between items-center p-3 bg-gray-100 rounded"
							>
								<div>
									<p className="font-medium">{item.name}</p>
									<p className="text-sm text-gray-600">
										{item.calories} kcal | P: {item.protein}g F: {item.fat}g C:{" "}
										{item.carbs}g
									</p>
								</div>
								<button
									onClick={() => addFood(date, meal, item)}
									className="text-sm text-blue-600 hover:underline"
								>
									Add
								</button>
							</li>
						))
					)}
				</ul>
			)}
		</div>
	);
};

export default FoodSearch;
