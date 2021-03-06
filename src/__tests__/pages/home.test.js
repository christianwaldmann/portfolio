import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages/Home";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../context/Theme";

test("renders the homepage", () => {
	Object.defineProperty(window, "matchMedia", {
		writable: true,
		value: jest.fn().mockImplementation((query) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // Deprecated
			removeListener: jest.fn(), // Deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
	});
	const { getByText } = render(
		<BrowserRouter>
			<ThemeProvider>
				<Home />
			</ThemeProvider>
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
