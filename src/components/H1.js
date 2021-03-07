import React from "react";

export default function H1(props) {
	return (
		<h1 className="pt-8 sm:pt-12 pb-2 text-gray-900 dark:text-gray-400 text-3xl font-bold">
			{props.children}
		</h1>
	);
}
