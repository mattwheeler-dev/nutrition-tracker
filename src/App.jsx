import { useState, createContext } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export const AppContext = createContext("");

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<>
			<AppContext.Provider value={{ loggedIn, setLoggedIn }}>
				<Nav />
				<Hero />
				<Reviews />
			</AppContext.Provider>
			<Footer />
		</>
	);
};

export default App;
