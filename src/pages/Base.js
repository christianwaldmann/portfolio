import Navbar from "../components/Navbar";

export default function Base({ children }) {
	return (
		<div>
			<Navbar />
			<div className="md:ml-72 px-6 flex flex-row text-gray-800">
				<div className="w-248">{children}</div>
			</div>
		</div>
	);
}
