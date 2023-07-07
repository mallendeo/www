export interface DribbbleItem {
	type: 'dribbble'
	url: string
	img?: string
	title: string
	year: number
}

export const dribbbleItems = [
	{
		type: 'dribbble',
		url: 'https://dribbble.com/shots/5167234-Icons-App',
		title: 'Icons App Mockup',
		year: 2018,
	},
	{
		type: 'dribbble',
		url: 'https://dribbble.com/shots/5276443-Menu',
		title: 'Minimal Brutalist Menu',
		year: 2018,
	},
	{
		type: 'dribbble',
		url: 'https://dribbble.com/shots/5498050-Home',
		title: 'Real Estate App Logo',
		year: 2018,
	},
	{
		type: 'dribbble',
		url: 'https://dribbble.com/shots/5519867-Menu',
		title: 'Real Estate App Mockup',
		year: 2018,
	},
	{
		type: 'dribbble',
		url: 'https://dribbble.com/shots/5476158-Coffee',
		title: 'Coffee',
		year: 2018,
	},
	{
		type: 'dribbble',
		url: 'https://dribbble.com/shots/15417744-Kiwi-App-Icon',
		title: 'Kiwi App Icon',
		year: 2021,
	},
].map((item) => ({
	...item,
	img: `/dribbble/${item.title}.png`.toLowerCase().split(/\s+/).join('-'),
})) as DribbbleItem[]
