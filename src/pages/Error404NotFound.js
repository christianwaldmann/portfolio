import React from "react";
import { Link } from "react-router-dom";

export default function Error404NotFound() {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center text-gray-800">
			<h1 class="flex justify-center text-6xl mt-8 font-light">404</h1>
			<div class="flex justify-center text-2xl">Page not found</div>
			<Link
				class="mt-12 px-3 py-2 border dark:border-gray-600 bg-gray-100 hover:bg-gray-200 text-sm font-semibold "
				to="/"
			>
				Return to home
			</Link>
		</div>
	);
}
