import React from "react";

function Footer() {
	return (
		<footer
			style={{
				padding: "20px",
				background: "#222",
				color: "#fff",
				textAlign: "center",
			}}
		>
			&copy; {new Date().getFullYear()} Despot Studio. All rights reserved.
		</footer>
	);
}

export default Footer;
