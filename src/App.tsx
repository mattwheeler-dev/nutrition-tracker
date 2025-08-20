import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "./lib/supabase";
import { useAuthStore } from "./state/authStore";
import Navbar from "./components/Navbar";
import SearchResultsPanel from "./components/SearchResultsPanel";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Profile from "./pages/Profile";

const App = () => {
	const setUser = useAuthStore((s) => s.setUser);

	useEffect(() => {
		// Load current user on refresh
		supabase.auth.getUser().then(({ data }) => {
			setUser(data.user ?? null);
		});

		// Listen for login/logout
		const { data: listener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setUser(session?.user ?? null);
			}
		);

		return () => {
			listener.subscription.unsubscribe();
		};
	}, [setUser]);

	return (
		<Router>
			<Navbar />
			<SearchResultsPanel />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/history" element={<History />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</Router>
	);
};

export default App;
