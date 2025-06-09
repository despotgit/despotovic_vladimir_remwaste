import React, { useState } from "react";
import "./booking-filter-row.css"; // you can style it here

const BookingFilterRow = ({ onFilterChange }) => {
	const [postcode, setPostcode] = useState("");
	const [wasteType, setWasteType] = useState("");
	const [skipSize, setSkipSize] = useState("");
	const [permitRequired, setPermitRequired] = useState(false);
	const [deliveryDate, setDeliveryDate] = useState("");
	const [collectionDate, setCollectionDate] = useState("");

	const handleChange = () => {
		// send filter state to parent component (optional)
		if (onFilterChange) {
			onFilterChange({
				postcode,
				wasteType,
				skipSize,
				permitRequired,
				deliveryDate,
				collectionDate,
			});
		}
	};

	// Update individual fields and trigger change
	const updateField = (setter) => (e) => {
		setter(e.target.type === "checkbox" ? e.target.checked : e.target.value);
		handleChange();
	};

	return (
		<div className="booking-filter-row">
			<input
				type="text"
				placeholder="Postcode"
				value={postcode}
				onChange={updateField(setPostcode)}
			/>

			<select value={wasteType} onChange={updateField(setWasteType)}>
				<option value="">Select Waste Type</option>
				<option value="general">General Waste</option>
				<option value="green">Green Waste</option>
				<option value="wood">Wood</option>
				<option value="metal">Metal</option>
			</select>

			<select value={skipSize} onChange={updateField(setSkipSize)}>
				<option value="">Select Skip Size</option>
				<option value="4">4 Yard</option>
				<option value="6">6 Yard</option>
				<option value="8">8 Yard</option>
				<option value="12">12 Yard</option>
			</select>

			<label>
				<input
					type="checkbox"
					checked={permitRequired}
					onChange={updateField(setPermitRequired)}
				/>
				Permit Required
			</label>

			<input
				type="date"
				value={deliveryDate}
				onChange={updateField(setDeliveryDate)}
			/>

			<input
				type="date"
				value={collectionDate}
				onChange={updateField(setCollectionDate)}
			/>
		</div>
	);
};

export default BookingFilterRow;
