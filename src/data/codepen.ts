export interface CodepenItem {
	type: 'codepen'
	url: string
	slug: string
	slugCdp: string
	title: string
	year: number
	video?: string
	border?: boolean
}

export const codepenItems: CodepenItem[] = [
	{
		slug: 'nvidia-outro',
		slugCdp: 'JmNGem',
		title: 'nvidia Outro',
		video: 'nvidia.mp4',
		year: 2018,
	},
	{
		slug: 'dave2d-intro',
		slugCdp: 'qywwMB',
		border: true,
		title: 'Dave2D YouTube Intro',
		video: 'dave2d.mp4',
		year: 2018,
	},
	{
		slug: 'ltt-old-intro',
		slugCdp: 'bYERav',
		title: 'Linus Tech Tips Old Intro',
		video: 'ltt.mp4',
		year: 2017,
	},
	{
		slug: 'mkbhd-intro',
		slugCdp: 'dvbQQx',
		title: 'Marques Brownlee (aka MKBHD) Intro',
		video: 'mkbhd.mp4',
		year: 2018,
	},
	{
		slug: 'pango-intro',
		slugCdp: 'xORqVp',
		title: 'Pango Intro',
		video: 'pango.mp4',
		year: 2016,
	},
	{
		slug: 'gamecube-intro',
		slugCdp: 'mdOZbV',
		title: 'Gamecube (Pure CSS)',
		video: 'gamecube.mp4',
		year: 2014,
	},
	{
		slug: 'scoreboard',
		slugCdp: 'EowXrm',
		title: 'Scoreboard (Pure CSS)',
		video: 'scoreboard.mp4',
		year: 2018,
	},
	{
		slug: 'cardano',
		slugCdp: 'qBRNQPv',
		title: 'Cardano Logo',
		video: 'cardano.mp4',
		year: 2021,
	},
].map(
	(item) =>
		({
			...item,
			type: 'codepen',
			url: `https://codepen.io/mallendeo/pen/${item.slugCdp}`,
			video: item.video ? `/videos/codepen/${item.video}` : undefined,
		}) satisfies CodepenItem,
)
