import type { FoodItem } from "../types/nutrition";

export function getNutritionTotals(foodItems: FoodItem[]) {
	return foodItems.reduce(
		(totals, item) => ({
			calories: totals.calories + item.calories,
			protein: totals.protein + item.protein,
			fat: totals.fat + item.fat,
			carbs: totals.carbs + item.carbs,
		}),
		{ calories: 0, protein: 0, fat: 0, carbs: 0 }
	);
}
