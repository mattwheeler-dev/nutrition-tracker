import { useEffect } from "react";
import { useNutritionStore } from "../stores/nutritionStore";
import type { FoodItem, MealType } from "../types/nutrition";
import MealLog from "../components/MealLog";
import NutritionSummary from "../components/NutritionSummary";
import {
	getNextDate,
	getPrevDate,
	formatDateDisplay,
} from "../utils/dateHelpers";

const mockFoods: FoodItem[] = [
	{
		id: "banana-001",
		name: "Banana",
		calories: 105,
		protein: 1.3,
		fat: 0.3,
		carbs: 27,
	},
	{
		id: "eggs-001",
		name: "Scrambled Eggs",
		calories: 200,
		protein: 12,
		fat: 15,
		carbs: 2,
	},
	{
		id: "oats-001",
		name: "Oatmeal",
		calories: 150,
		protein: 5,
		fat: 3,
		carbs: 27,
	},
];

const Dashboard = () => {
	const logs = useNutritionStore((s) => s.logs);
	const selectedDate = useNutritionStore((s) => s.selectedDate);
	const setDate = useNutritionStore((s) => s.setDate);

	const mealTypes: MealType[] = ["breakfast", "lunch", "dinner", "snacks"];

	useEffect(() => {
		const logs = useNutritionStore.getState().logs;
		if (!logs[selectedDate]) {
			const addFood = useNutritionStore.getState().addFood;
			mockFoods.forEach((food) => addFood(selectedDate, "snacks", food));
		}
	}, []);

	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<button
					onClick={() => setDate(getPrevDate(selectedDate))}
					className="text-sm text-blue-600 hover:underline"
				>
					← Previous
				</button>

				<h1 className="text-lg font-bold text-gray-800">
					{formatDateDisplay(selectedDate)}
				</h1>

				<button
					onClick={() => setDate(getNextDate(selectedDate))}
					className="text-sm text-blue-600 hover:underline"
				>
					Next →
				</button>
			</div>
			<NutritionSummary />

			<h1 className="text-2xl font-bold mb-4">
				Your Meals for {formatDateDisplay(selectedDate)}
			</h1>

			{mealTypes.map((meal) => {
				const dayLog = logs[selectedDate] || {
					breakfast: [],
					lunch: [],
					dinner: [],
					snacks: [],
				};
				return <MealLog key={meal} meal={meal} items={dayLog[meal]} />;
			})}
		</div>
	);
};

export default Dashboard;
