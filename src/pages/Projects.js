import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { projects } from "../config/projects";

export default function Projects() {
	return (
		<div>
			<Navbar />
			<div className="sm:ml-72 px-6 flex flex-row text-gray-800">
				<div className="w-192">
					{projects.map((project, index) => (
						<div key={index}>
							<Header>{project.title}</Header>
							<p
								dangerouslySetInnerHTML={{
									__html: project.description,
								}}
							></p>
							<img
								className="w-full h-64 mt-5 object-cover"
								src={project.splash_img}
								alt="Project Screenshot"
							/>
							<ul className="mt-4 list-disc list-inside">
								{/* Languages */}
								<li>
									Languages / Frameworks:{" "}
									{project.languages.join(", ")}
								</li>
								{/* Links */}
								{project.links.map((link, index) => (
									<li key={index}>
										<a href={link.href}>{link.text}</a>
									</li>
								))}
							</ul>
							<div className="mb-16" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
