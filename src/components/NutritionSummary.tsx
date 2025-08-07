import { useNutritionStore } from "../state/nutritionStore";
import type { MealType } from "../types/nutrition";
import { getNutritionTotals } from "../utils/nutritionHelpers";

const mealTypes: MealType[] = ["breakfast", "lunch", "dinner", "snacks"];

const NutritionSummary = () => {
	const date = useNutritionStore((s) => s.selectedDate);
	const logs = useNutritionStore((s) => s.logs[date]) || {
		breakfast: [],
		lunch: [],
		dinner: [],
		snacks: [],
	};

	const allFoods = mealTypes.flatMap((meal) => logs[meal]);
	const totals = getNutritionTotals(allFoods);

	return (
		<div className="mt-6 p-4 bg-gray-50 border rounded shadow">
			<h2 className="text-lg font-semibold mb-2">Nutrition Summary</h2>
			<div className="flex flex-col gap-1 text-sm text-gray-700">
				<div>
					<strong>Calories:</strong> {totals.calories}
				</div>
				<div>
					<strong>Protein:</strong> {totals.protein.toFixed(1)}g
				</div>
				<div>
					<strong>Fat:</strong> {totals.fat.toFixed(1)}g
				</div>
				<div>
					<strong>Carbs:</strong> {totals.carbs.toFixed(1)}g
				</div>
			</div>
		</div>
	);
};

export default NutritionSummary;
