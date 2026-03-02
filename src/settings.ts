export const profile = {
	fullName: 'Marvelle Steven',
	title: '',
	institute: 'Newcastle University',
	author_name: 'Marvelle Steven', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{ title: 'Computer Science', description: 'Programming graphical environment and low level render pipelining alongside code coordination and debug tooling to interface with matrix transformations, physics engines and object class scripts', field: 'computer_science' },
		{ title: '3d Artistry', description: '3d modelling, texturing, posing and animation for high poly sculpts, games and interactive media', field: '3d_artistry' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'marvelle_s@outlook.com',
	linkedin: 'www.linkedin.com/in/marvelle-steven-14a879216',
	x: '',
	bluesky: '',
	github: 'https://github.com/Marvelle-S/marvelle-s.github.io',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: true,
	transitions: true,
	lightTheme: 'forest', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'forest', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
	base: '/marvelle-s.github.io' // Repository name starting with /
}

export const seo = {
	default_title: 'Marvelle Steven - Portfolio',
	default_description: 'This is my Portfolio as an Aspiring Technical Artist.',
	default_image: '/images/astro-academia.png',
}
