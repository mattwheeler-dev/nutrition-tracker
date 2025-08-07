export type MealType = "breakfast" | "lunch" | "dinner" | "snacks";

export interface FoodItem {
	id: string;
	name: string;
	calories: number;
	protein: number;
	fat: number;
	carbs: number;
}
