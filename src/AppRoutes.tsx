// src/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import History from "@/pages/History";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

export default function AppRoutes() {
	return (
		<Routes>
			{/* Public routes */}
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />

			{/* Protected routes */}
			<Route
				path="/dashboard"
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/history"
				element={
					<ProtectedRoute>
						<History />
					</ProtectedRoute>
				}
			/>

			{/* Default redirect */}
			<Route path="*" element={<Login />} />
		</Routes>
	);
}
