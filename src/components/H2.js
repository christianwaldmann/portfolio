import React from "react";

export default function H2(props) {
	return (
		<h2 className="pt-8 pb-3 text-gray-900 dark:text-gray-400 text-2xl font-bold">
			{props.children}
		</h2>
	);
}
