import { useEffect } from "react";
import { useNutritionStore } from "../state/nutritionStore";
import type { FoodItem, MealType } from "../types/nutrition";
import MealLog from "../components/MealLog";

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
	const date = useNutritionStore((s) => s.selectedDate);
	const logs = useNutritionStore((s) => s.logs);

	const mealTypes: MealType[] = ["breakfast", "lunch", "dinner", "snacks"];

	useEffect(() => {
		const logs = useNutritionStore.getState().logs;
		if (!logs[date]) {
			const addFood = useNutritionStore.getState().addFood;
			mockFoods.forEach((food) => addFood(date, "snacks", food));
		}
	}, []);

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Your Meals for {date}</h1>

			{mealTypes.map((meal) => {
				const dayLog = logs[date] || {
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
