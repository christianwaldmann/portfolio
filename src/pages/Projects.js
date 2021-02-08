import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ZoomableImage from "../components/ZoomableImage";
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
							<ZoomableImage
								className="w-full mt-5 object-cover"
								src={project.splash_img}
								alt="Project Screenshot"
							/>
							<ul className="mt-4 list-disc list-inside">
								{/* Languages */}
								<li>
									Languages: {project.languages.join(", ")}
								</li>
								{/* Frameworks and Libraries */}
								<li>
									Frameworks and Libraries:{" "}
									{project.frameworks_and_libraries.join(
										", "
									)}
								</li>
								{/* Tools */}
								<li>Tools: {project.tools.join(", ")}</li>
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
