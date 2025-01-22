import { useState, createContext } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

export const AppContext = createContext("");

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<>
			<AppContext.Provider value={{ loggedIn, setLoggedIn }}>
				<Nav />
				{!loggedIn ? <Welcome /> : <Home />}
			</AppContext.Provider>
			<Footer />
		</>
	);
};

export default App;
