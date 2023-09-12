import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BurgersPage from "./pages/BurgersPage";
import ShawarmaPage from "./pages/ShawarmaPage";
import PizzaPage from "./pages/PizzaPage";
import DessertPage from "./pages/DessertPage";
import DrinkPage from "./pages/DrinkPage";
import FastFoodPage from "./pages/FastFoodPage";
import RollsPage from "./pages/RollsPage";
import SaladPage from "./pages/SaladPage";
import SushiPage from "./pages/SushiPage";
import SaucePage from "./pages/SaucePage";
import CardProductPage from "./pages/CardProductPage";
import BasketProductPage from "./pages/BasketProductPage";
import "./index.scss";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/burgers" element={<BurgersPage />} />
				<Route path="/shawarma" element={<ShawarmaPage />} />
				<Route path="/pizza" element={<PizzaPage />} />
				<Route path="/dessert" element={<DessertPage />} />
				<Route path="/drink" element={<DrinkPage />} />
				<Route path="/fast-food" element={<FastFoodPage />} />
				<Route path="/rolls" element={<RollsPage />} />
				<Route path="/salad" element={<SaladPage />} />
				<Route path="/sushi" element={<SushiPage />} />
				<Route path="/sauce" element={<SaucePage />} />
				<Route path="/card" element={<CardProductPage />} />
				<Route path="/basket" element={<BasketProductPage />} />
			</Routes>
		</div>
	);
}

export default App;
