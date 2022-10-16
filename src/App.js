import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/main.css'
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav-bar";
import Home from './pages';
import MyBudget from './pages/my-budget';

const App = () => {
	return (
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/my-budget-planner" element={<MyBudget />} />
				</Routes>
				<Footer />
			</BrowserRouter>
	
	);
};

export default App;
