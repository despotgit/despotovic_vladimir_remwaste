export const fetchSkips = async () => {
	const response = await fetch(
		"https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
	);

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data = await response.json();
	return data;
};
