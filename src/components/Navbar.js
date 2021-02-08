import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="w-full md:w-72 md:h-screen md:fixed pb-6 md:pb-0 px-6 pt-12 bg-black overflow-y-auto">
			<NavbarHeader />
			<NavbarSeparator />
			<NavbarItem title="Home" to="home" />
			<NavbarItem title="Projects" to="projects" />
		</nav>
	);
}

function NavbarItem(props) {
	return (
		<div className="w-full py-2 text-white outline-none">
			<Link className="text-white" to={props.to}>
				{props.title}
			</Link>
		</div>
	);
}

function NavbarHeader() {
	return (
		<h1 className="mb-2">
			<p className="text-white font-semibold">homepage of </p>
			<Link className="text-white text-2xl font-bold" to="">
				Christian Waldmann
			</Link>
		</h1>
	);
}

function NavbarSeparator() {
	return <div className="border-b border-gray-800 mt-4 mb-4" />;
}
