import React, { useState, useEffect } from "react";
import SkipList from "./components/skip-list/SkipList.jsx";
import BookingFilterRow from "./components/booking-filter-row/BookingFilterRow.jsx";
import { fetchSkips } from "./api";

import "./App.css";

function App() {
	const [skipsData, setSkipsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [vara, setVara] = useState("varaVal");

	const handleFilterChange = (filters) => {
		console.log("Filter changed:", filters);
		// Here you can implement the logic to filter skips based on the selected filters
	};

	useEffect(() => {
		const loadSkips = async () => {
			try {
				const data = await fetchSkips();
				setSkipsData(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		loadSkips();
	}, []);

	return (
		<div className="App">
			<BookingFilterRow onFilterChange={handleFilterChange} />
			<h1>Skip Hire</h1>

			{loading && <p>Loading skips...</p>}
			{error && <p>Error loading skips: {error}</p>}

			{!loading && !error && <SkipList skips={skipsData} />}
		</div>
	);
}

export default App;
