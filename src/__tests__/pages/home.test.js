import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages/Home";
import { BrowserRouter } from "react-router-dom";

test("renders the homepage", () => {
	const { getByText } = render(
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	);
	expect(getByText("Christian Waldmann")).toBeTruthy();
	expect(
		getByText(
			"I'm Christian, a student at Kempten University of applied Sciences doing my Masters Degree in Computer Science."
		)
	).toBeTruthy();
	expect(getByText("Email")).toBeTruthy();
	expect(getByText("Github")).toBeTruthy();
});
