import { create } from "zustand";
import type { FoodItem, MealType } from "@/types/nutrition";

type DailyLog = {
	[meal in MealType]: FoodItem[];
};

interface NutritionState {
	selectedDate: string; // ISO string
	logs: Record<string, DailyLog>; // logs by date
	addFood: (date: string, meal: MealType, item: FoodItem) => void;
	removeFood: (date: string, meal: MealType, index: number) => void;
	setDate: (date: string) => void;
	searchQuery: string;
	selectedMeal: MealType;
	setSearchQuery: (query: string) => void;
	setSelectedMeal: (meal: MealType) => void;
}

export const useNutritionStore = create<NutritionState>((set) => ({
	selectedDate: new Date().toISOString().split("T")[0],
	logs: {},
	setDate: (date) => set({ selectedDate: date }),
	searchQuery: "",
	selectedMeal: "lunch",
	setSearchQuery: (query) => set({ searchQuery: query }),
	setSelectedMeal: (meal) => set({ selectedMeal: meal }),
	addFood: (date, meal, item) =>
		set((state) => {
			const currentLog = state.logs[date] || {
				breakfast: [],
				lunch: [],
				dinner: [],
				snacks: [],
			};

			return {
				logs: {
					...state.logs,
					[date]: {
						...currentLog,
						[meal]: [...currentLog[meal], item],
					},
				},
			};
		}),
	removeFood: (date, meal, index) =>
		set((state) => {
			const currentMeal = state.logs[date]?.[meal] || [];
			return {
				logs: {
					...state.logs,
					[date]: {
						...state.logs[date],
						[meal]: currentMeal.filter((_, i) => i !== index),
					},
				},
			};
		}),
}));
