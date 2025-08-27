import { useNutritionStore } from "@/stores/nutritionStore";
import type { FoodItem } from "@/types/nutrition";

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

const SearchResultsPanel = () => {
	const query = useNutritionStore((s) => s.searchQuery);
	const selectedMeal = useNutritionStore((s) => s.selectedMeal);
	const date = useNutritionStore((s) => s.selectedDate);
	const addFood = useNutritionStore((s) => s.addFood);

	if (!query) return null;

	const filtered = mockResults.filter((item) =>
		item.name.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div className="fixed top-[60px] right-4 w-80 max-h-[80vh] overflow-y-auto z-50 bg-white shadow-lg rounded border p-4">
			<h3 className="font-semibold text-gray-800 mb-2">Search Results</h3>
			{filtered.length === 0 ? (
				<p className="text-sm text-gray-500">No results</p>
			) : (
				<ul className="space-y-2">
					{filtered.map((item) => (
						<li
							key={item.id}
							className="bg-gray-100 p-2 rounded flex justify-between items-center"
						>
							<div>
								<p className="font-medium">{item.name}</p>
								<p className="text-xs text-gray-600">
									{item.calories} kcal | P: {item.protein}g F: {item.fat}g C:{" "}
									{item.carbs}g
								</p>
							</div>
							<button
								onClick={() => addFood(date, selectedMeal, item)}
								className="text-xs text-blue-600 hover:underline"
							>
								Add
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchResultsPanel;
