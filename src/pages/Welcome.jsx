import "../assets/styles/Welcome.css";
import starsImg from "../assets/images/5stars.png";

const Welcome = () => {
	return (
		<main>
			<section className="hero">
				<article className="hero-overlay">
					<h1>Nutrition Tracker</h1>
					<h3>
						Live life according to <span>YOUR</span> tastes!
					</h3>
					<h4>We{`'`}re just here to help you track it!</h4>
					<button className="hero-start-btn">Get Started For Free</button>
					<p className="hero-sign-in">
						Already tracking? Sign in <span>here</span>
					</p>
				</article>
			</section>

			<section className="reviews">
				<article className="review">
					<img
						src={starsImg}
						alt="five star rating"
						width={150}
						className="stars"
					/>
					<p>
						{`"`}I{`'`}ve lost over 10 pounds just by using this app to help
						track calories!{`"`}
					</p>
					<p>- Stacy R.</p>
				</article>
				<article className="review">
					<img
						src={starsImg}
						alt="five star rating"
						width={150}
						className="stars"
					/>
					<p>
						{`"`}I had no idea how much I as over eating until I decided to
						track it, now I{`'`}m tracking my progress!{`"`}
					</p>
					<p>- Mark L.</p>
				</article>
				<article className="review">
					<img
						src={starsImg}
						alt="five star rating"
						width={150}
						className="stars"
					/>
					<p>
						{`"`}No more worrying about if I{`'`}ve gotten enough protein for
						the day!{`"`}
					</p>
					<p>- Tom W.</p>
				</article>
			</section>
		</main>
	);
};

export default Welcome;
