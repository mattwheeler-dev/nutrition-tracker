import { useNavigate } from "react-router-dom";
import { useNutritionStore } from "../stores/nutritionStore";
import { getNutritionTotals } from "../utils/nutritionHelpers";
import { getLastNDates, formatDateDisplay } from "../utils/dateHelpers";
import type { FoodItem } from "../types/nutrition";
import { useState } from "react";

const History = () => {
	const logs = useNutritionStore((s) => s.logs);
	const setDate = useNutritionStore((s) => s.setDate);
	const navigate = useNavigate();
	const [customDate, setCustomDate] = useState("");

	const recentDates = getLastNDates(7);

	const handleJump = (date: string) => {
		setDate(date);
		navigate("/dashboard");
	};

	return (
		<div className="p-4 max-w-xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">This Week’s Meals</h1>

			<ul className="space-y-4 mb-6">
				{recentDates.map((date) => {
					const meals = logs[date] || {
						breakfast: [],
						lunch: [],
						dinner: [],
						snacks: [],
					};
					const allFoods: FoodItem[] = Object.values(meals).flat();
					const totals = getNutritionTotals(allFoods);

					return (
						<li
							key={date}
							onClick={() => handleJump(date)}
							className="cursor-pointer bg-white hover:bg-blue-50 border rounded p-3 shadow transition"
						>
							<div className="font-semibold">{formatDateDisplay(date)}</div>
							<div className="text-sm text-gray-600">
								{totals.calories} kcal | P: {totals.protein.toFixed(1)}g F:{" "}
								{totals.fat.toFixed(1)}g C: {totals.carbs.toFixed(1)}g
							</div>
						</li>
					);
				})}
			</ul>

			<div className="border-t pt-4">
				<h2 className="font-semibold mb-2">Jump to a specific day</h2>
				<div className="flex items-center gap-3">
					<input
						type="date"
						value={customDate}
						onChange={(e) => setCustomDate(e.target.value)}
						className="p-2 border rounded"
					/>
					<button
						disabled={!customDate}
						onClick={() => handleJump(customDate)}
						className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
					>
						Go
					</button>
				</div>
			</div>
		</div>
	);
};

export default History;
