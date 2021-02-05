import React from "react";
import { render } from "@testing-library/react";
import Projects from "../../pages/Projects";
import { BrowserRouter } from "react-router-dom";

test("renders the homepage", () => {
	const { getByText } = render(
		<BrowserRouter>
			<Projects />
		</BrowserRouter>
	);
	expect(getByText("Christian Waldmann")).toBeTruthy();
	expect(getByText("Bookmarks")).toBeTruthy();
	expect(
		getByText("A fullstack website for managing bookmarks.")
	).toBeTruthy();
	expect(getByText("Deployed Website")).toBeTruthy();
});
