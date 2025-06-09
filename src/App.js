import React, { useState, useEffect } from "react";
import SkipList from "./SkipList.js";
import "./App.css";

function App() {
	const [skipsData, setSkipsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchSkips = async () => {
			try {
				const response = await fetch(
					"https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
				);

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				setSkipsData(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchSkips();
	}, []);

	return (
		<div className="App">
			<h1>Skip Hire</h1>

			{loading && <p>Loading skips...</p>}
			{error && <p>Error loading skips: {error}</p>}

			{!loading && !error && <SkipList skips={skipsData} />}
		</div>
	);
}

export default App;
