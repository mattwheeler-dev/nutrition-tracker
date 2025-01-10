import starsImg from "../assets/images/5stars.png";

const Reviews = () => {
	return (
		<section className="reviews">
			<article className="review">
				<img
					src={starsImg}
					alt="five star rating"
					width={150}
					className="stars"
				/>
				<p>
					{`"`}I{`'`}ve lost over 10 pounds just by using this app to help track
					calories!{`"`}
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
					{`"`}I had no idea how much I as over eating until I decided to track
					it, now I{`'`}m tracking my improvements!{`"`}
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
					{`"`}My wife was always telling me to drink more water, now I can just
					show her that I have been and she doesn{`'`}t have to worry about it
					anymore!{`"`}
				</p>
				<p>- Tom W.</p>
			</article>
		</section>
	);
};

export default Reviews;
