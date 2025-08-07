import { useNutritionStore } from "../state/nutritionStore";
import type { MealType, FoodItem } from "../types/nutrition";

interface MealLogProps {
	meal: MealType;
	items: FoodItem[];
}

const MealLog = ({ meal, items }: MealLogProps) => {
	const date = useNutritionStore((s) => s.selectedDate);

	const removeFood = useNutritionStore((s) => s.removeFood);

	return (
		<div className="mb-6">
			<h2 className="text-xl font-semibold capitalize mb-2">{meal}</h2>
			{items.length === 0 ? (
				<p className="text-gray-500 italic">No foods logged.</p>
			) : (
				<ul className="space-y-2">
					{items.map((item, index) => (
						<li
							key={item.id + index}
							className="flex justify-between items-center bg-white p-3 shadow rounded"
						>
							<div>
								<p className="font-medium">{item.name}</p>
								<p className="text-sm">
									{item.calories} Calories | Protein: {item.protein}g Fat:{" "}
									{item.fat}g Carbs: {item.carbs}g
								</p>
							</div>
							<button
								onClick={() => removeFood(date, meal, index)}
								className="text-red-500 hover:underline text-sm"
							>
								Remove
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default MealLog;
