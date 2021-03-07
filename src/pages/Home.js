import Base from "./Base";
import H1 from "../components/H1";
import H2 from "../components/H2";
import { welcome_paragraphs, links } from "../config/home";
import { projects } from "../config/projects";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<Base>
			<div className="mt-12" />
			<H1>Welcome!</H1>
			<div className="-mb-2" />
			{welcome_paragraphs.map((welcome_paragraph, index) => (
				<p
					key={index}
					className="pt-4"
					dangerouslySetInnerHTML={{
						__html: welcome_paragraph,
					}}
					style={{ a: "red" }}
				></p>
			))}
			<H2>Links</H2>
			<ul className="mb-2 list-disc list-inside">
				{links.map((link, index) => (
					<li key={index}>
						<a href={link.href}>{link.text}</a>
					</li>
				))}
			</ul>
			<H1>Projects</H1>
			{projects.map((project, index) => (
				<Link
					to={
						"/projects/" +
						project.title.toLowerCase().replace(" ", "-")
					}
					className="hover:no-underline"
					key={index}
				>
					<div className="my-6 px-6 py-4 bg-gray-100 dark:bg-gray-850 rounded-lg text-sm text-gray-600 dark:text-gray-500">
						<h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-400">
							{project.title}
						</h2>
						<p>{project.description.replace(/<[^>]+>/g, "")}</p>
						<div className="mt-2 font-light">
							{/* Languages */}
							{project.languages.join(", ")}
							<div className="inline-block px-2">&#8226;</div>
							{/* Frameworks and Libraries */}
							{project.frameworks_and_libraries.join(", ")}
						</div>
					</div>
				</Link>
			))}
		</Base>
	);
}
