import Header from "../components/Header";

export default function Base({ children }) {
	return (
		<>
			<div className="fixed w-full bg-white dark:bg-gray-900 z-10">
				<div className="container mx-auto">
					<Header />
				</div>
			</div>
			<div className="container mx-auto">
				<div className="px-6 flex flex-row sm:text-lg text-gray-700 dark:text-gray-500">
					<div className="w-192 mx-auto">{children}</div>
				</div>
			</div>
		</>
	);
}
