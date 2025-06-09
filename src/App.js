import React, { useState, useEffect } from "react";
import SkipList from "./SkipList.js";
import { fetchSkips } from "./api";
import "./App.css";

function App() {
	const [skipsData, setSkipsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadSkips = async () => {
			try {
				const data = await fetchSkips();
				setSkipsData(data); // ✅ OK here
			} catch (err) {
				setError(err.message); // ✅ OK here
			} finally {
				setLoading(false); // ✅ OK here
			}
		};

		loadSkips();
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
