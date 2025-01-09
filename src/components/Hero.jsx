import "../assets/styles/Hero.css";

const Hero = () => {
	return (
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
	);

	// photo by brooke lark on unsplash
};

export default Hero;
