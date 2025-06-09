import React from "react";
import "./SkipList.css"; // Optional for styling

const SkipList = ({ skips }) => {
	const calculateTotalPrice = (priceBeforeVat, vatPercent) => {
		return priceBeforeVat * (1 + vatPercent / 100);
	};

	return (
		<div className="skip-list">
			<h2>Available Skips</h2>
			{skips.length === 0 && <p>No skips available.</p>}
			<ul>
				{skips.map((skip) => (
					<li key={skip.id} className="skip-item">
						<div>
							<strong>Size:</strong> {skip.size} yd³
						</div>
						<div>
							<strong>Hire Period:</strong> {skip.hire_period_days} days
						</div>
						<div>
							<strong>Postcode:</strong> {skip.postcode}
						</div>
						<div>
							<strong>Allowed on road:</strong>{" "}
							{skip.allowed_on_road ? "Yes" : "No"}
						</div>
						<div>
							<strong>Allows heavy waste:</strong>{" "}
							{skip.allows_heavy_waste ? "Yes" : "No"}
						</div>
						<div>
							<strong>Total Price (with VAT):</strong> £
							{calculateTotalPrice(skip.price_before_vat, skip.vat).toFixed(2)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SkipList;
