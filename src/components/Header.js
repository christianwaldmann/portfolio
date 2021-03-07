import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	return (
		<div className="h-16 flex items-center px-5">
			<Link
				className="text-gray-800 dark:text-gray-400 text-2xl font-bold hover:no-underline"
				to=""
			>
				Christian Waldmann
			</Link>
			<ThemeToggle className="ml-auto" />
		</div>
	);
}
