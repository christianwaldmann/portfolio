import Base from "./Base";
import H1 from "../components/H1";
import H2 from "../components/H2";
import ZoomableImage from "../components/ZoomableImage";

export default function Project({ project }) {
	let links_section =
		project.links.length !== 0 ? (
			<div className="mb-16">
				<H2>Links</H2>
				<ul className="list-disc list-inside">
					{project.links.map((link, index) => (
						<li key={index}>
							<a href={link.href}>{link.text}</a>
						</li>
					))}
				</ul>
			</div>
		) : (
			<div />
		);

	return (
		<Base>
			<div className="mt-12" />
			<H1>{project.title}</H1>
			<p
				className="mt-4 mb-8"
				dangerouslySetInnerHTML={{
					__html: project.description,
				}}
			/>
			<ZoomableImage
				className="w-full object-cover"
				src={project.splash_img}
				alt="Project Screenshot"
			/>
			<div className="text-base">
				{links_section}
				<H2>Technology used</H2>
				<h3 className="mt-1 mb-2 font-bold">Languages</h3>
				<ul className="list-disc list-inside">
					{project.languages.map((language, index) => (
						<li key={index}>{language}</li>
					))}
				</ul>
				<h3 className="mt-4 mb-2 font-bold">
					Frameworks and Libraries
				</h3>
				<ul className="list-disc list-inside">
					{project.frameworks_and_libraries.map(
						(framework_and_library, index) => (
							<li key={index}>{framework_and_library}</li>
						)
					)}
				</ul>
				<h3 className="mt-4 mb-2 font-bold">Tools</h3>
				<ul className="list-disc list-inside">
					{project.tools.map((tool, index) => (
						<li key={index}>{tool}</li>
					))}
				</ul>
				<div className="mb-12" />
			</div>
		</Base>
	);
}
