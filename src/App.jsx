import { useState, createContext } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";

export const AppContext = createContext("");

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<>
			<AppContext.Provider value={{ loggedIn, setLoggedIn }}>
				<Nav />
				<Hero />
				<Reviews />
			</AppContext.Provider>
		</>
	);
}

export default App;
