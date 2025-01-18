// import { useState, useContext, createContext } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";

// export const AppContext = createContext("");

const App = () => {
	// const [loggedIn, setLoggedIn] = useState(false);

	return (
		<>
			{/* <AppContext.Provider value={{ loggedIn, setLoggedIn }}> */}
			<Nav />
			<Welcome />
			{/* </AppContext.Provider> */}
			<Footer />
		</>
	);
};

export default App;
