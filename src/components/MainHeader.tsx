import clsx from 'clsx'
import { FiMail, FiFile, FiHome } from 'solid-icons/fi'
import type { Component, ParentComponent } from 'solid-js'

const ListItem: ParentComponent<{
	active?: boolean
	href: string
	class?: string
	linkClass?: string
	text?: string
	currentPath?: string
	hideIndicator?: boolean
	indicatorClass?: string
}> = (props) => {
	const pathStr = props.currentPath?.split(/\//).join(' ').trim()
	const hrefStr = props.href.split(/\//).join(' ').trim()
	return (
		<li
			class={clsx(
				'px-2 py-1 flex flex-col',
				props.active || pathStr === hrefStr ? 'text-rose' : undefined,
				props.class,
			)}
		>
			<a
				class={clsx('flex items-center gap-1', props.linkClass)}
				href={props.href}
			>
				{props.children ?? props.text}
			</a>
			{!props.hideIndicator && (props.active || pathStr === hrefStr) && (
				<hr class={clsx('h-1 w-5 bg-rose', props.indicatorClass)} />
			)}
		</li>
	)
}

const MainHeader: Component<{ currentPath?: string }> = (props) => (
	<header class='max-w-4xl w-full mx-auto flex flex-col mt-4'>
		<nav>
			<ul class={clsx('px-2 gap-3', 'flex', 'font-bold pr-4 items-start')}>
				<ListItem currentPath={props.currentPath} href='/'>
					Portfolio
				</ListItem>
				<ListItem currentPath={props.currentPath} href='/work'>
					Work
				</ListItem>

				<li class='flex-1' />

				<ListItem
					currentPath={props.currentPath}
					href='mailto:hi@mallendeo.com'
				>
					<FiMail
						class={clsx(
							props.currentPath === '/contact' ? 'text-rose' : 'text-black',
						)}
						size={24}
					/>
				</ListItem>
				<ListItem currentPath={props.currentPath} href='/cv'>
					<FiFile size={20} />
					CV
				</ListItem>
			</ul>
		</nav>
	</header>
)

export default MainHeader
