import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Project from "../../pages/Project";
import { ThemeProvider } from "../../context/Theme";

let project = {
	title: "Homepage",
	description: "This website. A way to display some projects of mine.",
	splash_img: "images/Homepage.png",
	languages: ["HTML", "CSS", "Javascript"],
	frameworks_and_libraries: ["React", "Tailwind CSS"],
	tools: ["Git", "GitHub Pages", "Travis CI"],
	links: [
		{
			text: "Source Code",
			href: "https://github.com/christianwaldmann/portfolio",
		},
	],
};

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
				<Project project={project} />
			</ThemeProvider>
		</BrowserRouter>
	);
	expect(getByText("Christian Waldmann")).toBeTruthy();
	expect(getByText("Homepage")).toBeTruthy();
	expect(
		getByText("This website. A way to display some projects of mine.")
	).toBeTruthy();
	expect(getByText("Source Code")).toBeTruthy();
});
