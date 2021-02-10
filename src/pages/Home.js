import Base from "./Base";
import Header from "../components/Header";
import { welcome_paragraphs, links } from "../config/home";

export default function Home() {
	return (
		<Base>
			<Header>Welcome</Header>
			<div className="-mb-4" />
			{welcome_paragraphs.map((welcome_paragraph, index) => (
				<p
					key={index}
					className="pt-4"
					dangerouslySetInnerHTML={{
						__html: welcome_paragraph,
					}}
				></p>
			))}
			<Header>Links</Header>
			<ul className="mb-2 list-disc list-inside">
				{links.map((link, index) => (
					<li key={index}>
						<a href={link.href}>{link.text}</a>
					</li>
				))}
			</ul>
		</Base>
	);
}
