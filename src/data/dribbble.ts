export interface DribbbleItem {
	type?: 'dribbble'
	url: string
	img?: string
	title: string
	year: number
	border?: boolean
	className?: string
}

export const items: DribbbleItem[] = [
	{
		url: 'https://dribbble.com/shots/5167234-Icons-App',
		title: 'Icons App Mockup',
		year: 2018,
	},
	{
		url: 'https://dribbble.com/shots/5276443-Menu',
		title: 'Minimal Brutalist Menu',
		year: 2018,
		border: true,
	},
	{
		url: 'https://dribbble.com/shots/5498050-Home',
		title: 'Real Estate App Logo',
		year: 2018,
	},
	{
		url: 'https://dribbble.com/shots/5519867-Menu',
		title: 'Real Estate App Mockup',
		year: 2018,
	},
	{
		url: 'https://dribbble.com/shots/5476158-Coffee',
		title: 'Coffee',
		year: 2018,
	},
	{
		url: 'https://dribbble.com/shots/15417744-Kiwi-App-Icon',
		title: 'Kiwi App Icon',
		year: 2021,
	},
]

export const dribbbleItems: DribbbleItem[] = items.map(
	(item) =>
		({
			...item,
			type: 'dribbble',
			className: item.className ?? 'text-white',
			img: `/dribbble/${item.title}.png`.toLowerCase().split(/\s+/).join('-'),
		}) satisfies DribbbleItem,
)
