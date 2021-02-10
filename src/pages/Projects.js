import Base from "./Base";
import Header from "../components/Header";
import ZoomableImage from "../components/ZoomableImage";
import { projects } from "../config/projects";

export default function Projects() {
	return (
		<Base>
			{projects.map((project) => (
				<>
					<Header>{project.title}</Header>
					<p
						className="mb-5"
						dangerouslySetInnerHTML={{
							__html: project.description,
						}}
					></p>
					<ZoomableImage
						className="w-full object-cover"
						src={project.splash_img}
						alt="Project Screenshot"
					/>
					<ul className="mt-4 mb-16 list-disc list-inside">
						{/* Languages */}
						<li>Languages: {project.languages.join(", ")}</li>
						{/* Frameworks and Libraries */}
						<li>
							Frameworks and Libraries:{" "}
							{project.frameworks_and_libraries.join(", ")}
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
				</>
			))}
		</Base>
	);
}
