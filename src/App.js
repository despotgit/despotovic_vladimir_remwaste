import React, { useState, useEffect } from "react";
import SkipList from "./SkipList.js";
import "./App.css";

function App() {
	const [skipsData, setSkipsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
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
