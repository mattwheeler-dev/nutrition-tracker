import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/AppRoutes";
import { useAuthStore } from "@/stores/authStore";
import { supabase } from "@/lib/supabase";

function App() {
	const { setUser, checkSession } = useAuthStore();

	useEffect(() => {
		checkSession();

		// Listen for login/logout events
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setUser(session?.user ?? null);
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, [checkSession, setUser]);

	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
