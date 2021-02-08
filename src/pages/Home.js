import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { welcome_paragraphs, links } from "../config/home";

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="md:ml-72 px-6 flex flex-row text-gray-800">
				<div className="w-248">
					<Header>Welcome</Header>
					<div className="-mb-3" />
					{welcome_paragraphs.map((welcome_paragraph, index) => (
						<p
							key={index}
							className="pt-3"
							dangerouslySetInnerHTML={{
								__html: welcome_paragraph,
							}}
						></p>
					))}
					<Header>Links</Header>
					<ul className="list-disc list-inside">
						{links.map((link, index) => (
							<li key={index}>
								<a href={link.href}>{link.text}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
