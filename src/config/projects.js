export const projects = [
	{
		title: "Bookmarks",
		description: "A fullstack website for managing bookmarks.",
		splash_img: "images/Bookmarks.png",
		languages: ["HTML", "CSS", "Javascript", "Python"],
		frameworks_and_libraries: [
			"React",
			"Django Rest Framework",
			"Tailwind CSS",
		],
		tools: ["Git", "Nginx", "VPS"],
		links: [
			{
				text: "Deployed Website",
				href: "https://bookmarks.doow.xyz/",
			},
		],
	},
	{
		title: "Orange Engine",
		description:
			"A game / rendering engine. This project is not implemented completely on my own, but instead it is my own version of a game engine based on the <a href='https://www.youtube.com/playlist?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT'>tutorial series</a> of the <a href='https://github.com/TheCherno/Hazel'>Hazel Engine</a>.",
		splash_img: "images/OrangeEngine.png",
		languages: ["C++"],
		frameworks_and_libraries: ["OpenGL", "Dear ImGui", "Entt"],
		tools: ["Git", "Premake"],
		links: [
			{
				text: "Source Code",
				href: "https://github.com/christianwaldmann/Orange",
			},
		],
	},
	{
		title: "Music Player",
		description: "A music player for Windows with basic functionality.",
		splash_img: "images/MusicPlayer.png",
		languages: ["C++"],
		frameworks_and_libraries: ["Qt"],
		tools: ["Git"],
		links: [],
	},
	{
		title: "Diagram Tool",
		description:
			"A tool to create diagrams for papers / printed publications with a predefined style.",
		splash_img: "images/DiagramTool.png",
		languages: ["Python"],
		frameworks_and_libraries: ["PyQt", "Matplotlib"],
		tools: ["Git"],
		links: [
			{
				text: "Source Code",
				href: "https://github.com/christianwaldmann/DiagramTool",
			},
		],
	},
];
