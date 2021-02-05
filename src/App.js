import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Error404NotFound from "./pages/Error404NotFound";
import "./styles.css";

export default function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path={["", "/", "/home"]}>
					<Home />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route component={Error404NotFound} />
			</Switch>
		</Router>
	);
}
