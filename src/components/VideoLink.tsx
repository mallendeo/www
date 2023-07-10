import clsx from 'clsx'
import type { Component } from 'solid-js'

const VideoLink: Component<{
	url: string
	src: string
	class?: string
	videoClass?: string
}> = (props) => {
	return (
		<a
			class={clsx(
				'outline-1 outline-dashed outline-transparent hover:outline-gray',
				'transition-all rounded-lg',
				props.class,
			)}
			target='__blank'
			rel='noopener noreferrer'
			href={props.url}
		>
			<video
				class={clsx('w-full h-full', props.videoClass)}
				muted
				autoplay
				src={props.src}
			/>
		</a>
	)
}

export default VideoLink
