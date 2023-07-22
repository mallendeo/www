// eslint-disable lint/a11y/useMediaCaption

import { createEffect, type Component, type ParentComponent } from 'solid-js'
import { clsx } from 'clsx'
import { BiLogosDribbble, BiLogosCodepen } from 'solid-icons/bi'
import { dribbbleItems } from '../data/dribbble'
import { codepenItems } from '../data/codepen'
import ShowcaseGrid from './ShowcaseGrid'

const Title: ParentComponent = (props) => (
	<h1 class='font-bold text-2xl text-gray-7 flex items-center gap-2'>
		{props.children}
	</h1>
)

const Showcase: Component<{ class?: string }> = (props) => (
	<div class={clsx('flex flex-col gap-3', props.class)}>
		<Title>
			<BiLogosDribbble fill='#D13880' /> Dribbble
		</Title>

		<ShowcaseGrid
			items={dribbbleItems.map((item) => ({
				content: (props) => (
					<div>
						<img
							class={clsx(
								'absolute top-0 left-0 w-full h-full',
								props.isVisible && 'lt-sm:scale-105',
								'group-hover:(scale-105!) group-focus-within:(scale-105!)',
								'transform-gpu will-change-transform transition-all',
							)}
							src={item.img}
							alt={item.title}
						/>
					</div>
				),
				title: item.title,
				url: item.url,
				border: item.border,
				iconClass: (props) =>
					clsx(
						'bg-rose group-hover:(shadow-rose-500/70) group-active:(shadow-[shadow-rose-500/70])',
						props.isVisible && 'lt-sm:shadow-rose-500/70',
					),
				icon: BiLogosDribbble,
			}))}
		/>

		<a
			class={clsx(
				'flex justify-center items-center w-full py-3',
				'rounded-lg bg-gray-1 text-gray-5 transition-all',
				'max-w-sm mx-auto mt-4',
				'group hover:(bg-rose text-white)',
			)}
			href='https://dribbble.com/mallendeo'
			target='__blank'
			rel='noopener'
		>
			See more on my{' '}
			<BiLogosDribbble
				class='ml-2 mr-0.5 group-hover:(text-white) text-rose transition-all'
				fill='currentColor'
			/>{' '}
			Dribbble profile!
		</a>

		<div class='h-0 my-10 mx-auto w-1/4 border-b-gray-200 border-b' />

		<Title>
			<BiLogosCodepen fill='currentColor' /> CodePen
		</Title>

		<ShowcaseGrid
			items={codepenItems.map((item) => ({
				content: (props) =>
					item.video ? (
						(() => {
							let videoRef: HTMLVideoElement | undefined

							createEffect(() => {
								if (!videoRef) return
								if (props.isVisible) {
									videoRef.currentTime = 0
									videoRef.loop = true
									videoRef.play()
									return
								}
								videoRef.pause()
								videoRef.currentTime = videoRef.duration || 0
							})

							return (
								<video
									ref={(el) => {
										videoRef = el
									}}
									muted
									playsinline
									src={item.video}
								/>
							)
						})()
					) : (
						<iframe
							class='pointer-events-none scale-50 origin-tl w-[200%] h-[200%] border-none absolute top-0 left-0'
							src={item.url}
							title={item.title}
							sandbox='allow-scripts allow-pointer-lock allow-same-origin'
							tabindex='-1'
						/>
					),
				title: item.title,
				border: item.border,
				url: item.url,
				iconClass: (props) =>
					clsx(
						'bg-zinc-900 group-hover:(shadow-zinc-900) group-active:(shadow-zinc-900)',
						props.isVisible && 'shadow-zinc-900',
					),
				icon: BiLogosCodepen,
			}))}
		/>

		<a
			class={clsx(
				'flex justify-center items-center w-full py-3',
				'rounded-lg bg-gray-1 text-gray-5 transition-all',
				'max-w-sm mx-auto mt-4',
				'group hover:(bg-black text-white)',
			)}
			href='https://codepen.io/mallendeo'
			target='__blank'
			rel='noopener'
		>
			See more on my{' '}
			<BiLogosCodepen
				class='ml-2 mr-0.5 group-hover:(text-white) text-black transition-all'
				fill='currentColor'
			/>{' '}
			CodePen profile!
		</a>
	</div>
)

export default Showcase
