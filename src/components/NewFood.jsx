import "../assets/styles/NewFood.css";

const NewFood = () => {
	return (
		<section className="new-food">
			<h2>Add Food</h2>
			<label htmlFor="search">Search</label>
			<input type="text" id="search" placeholder="Enter food item" />

			<article className="food-info">
				<label htmlFor="food-name">Name:</label>
				<input type="text" id="food-name" />

				<label htmlFor="food-serving">Serving Size:</label>
				<input type="text" id="food-serving" />

				<label htmlFor="food-cals">Calories:</label>
				<input type="text" id="food-cals" />

				<label htmlFor="food-name">Protein:</label>
				<input type="text" id="food-prot" />
			</article>
		</section>
	);
};

export default NewFood;
