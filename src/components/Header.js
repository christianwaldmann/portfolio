import React from "react";

export default function Header(props) {
	return (
		<h2 className="pt-6 mb-4 text-gray-900 text-3xl font-bold border-b">
			{props.children}
		</h2>
	);
}
