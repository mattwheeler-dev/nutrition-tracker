import NewFood from "../components/NewFood";
import { FaGlassWater, FaFireFlameCurved, FaDumbbell } from "react-icons/fa6";
import "../assets/styles/Home.css";

const Home = () => {
	return (
		<main>
			<section className="today">
				<h2>Today</h2>
				<article className="summary">
					<div>
						<FaGlassWater />
						water
					</div>
					<div>
						<FaFireFlameCurved />
						calories
					</div>
					<div>
						<FaDumbbell />
						protein
					</div>
				</article>
			</section>

			<NewFood />

			<section className="recent">
				<h3>Recent Activity</h3>
				<ul></ul>
			</section>
		</main>
	);
};

export default Home;
