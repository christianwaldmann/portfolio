import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Error404NotFound from "./pages/Error404NotFound";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "./context/Theme";
import { projects } from "./config/projects";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<ScrollToTop />
			<ThemeProvider>
				<Helmet>
					{/* Preload all images. This is fine to do here, because its only a few images and the combined size is relatively small (currently 0.2MB) */}
					{projects.map((project, index) => (
						<link
							rel="prefetch"
							href={project.splash_img}
							key={index}
						/>
					))}
					<body className="bg-white dark:bg-gray-900"></body>
				</Helmet>
				<Switch>
					<Route exact path={["", "/", "/home"]}>
						<Home />
					</Route>
					{projects.map((project, index) => (
						<Route
							exact
							path={
								"/projects/" +
								project.title.toLowerCase().replace(" ", "-")
							}
							key={index}
						>
							<Project project={project} />
						</Route>
					))}
					<Route component={Error404NotFound} />
				</Switch>
			</ThemeProvider>
		</Router>
	);
}
