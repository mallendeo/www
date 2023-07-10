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
	const { currentPath, href, active, hideIndicator } = props
	return (
		<li
			class={clsx(
				'px-2 py-1 flex flex-col',
				active || currentPath === href ? 'text-rose' : undefined,
				props.class,
			)}
		>
			<a
				class={clsx('flex items-center gap-1', props.linkClass)}
				href={props.href}
			>
				{props.children ?? props.text}
			</a>
			{!hideIndicator && (active || currentPath === href) && (
				<hr class={clsx('h-1 w-5 bg-rose', props.indicatorClass)} />
			)}
		</li>
	)
}

const MainHeader: Component<{ currentPath?: string }> = ({ currentPath }) => (
	<header class='max-w-4xl w-full mx-auto flex flex-col mt-4'>
		<nav>
			<ul class={clsx('px-2 gap-3', 'flex', 'font-bold pr-4 items-start')}>
				<ListItem currentPath={currentPath} href='/'>
					Portfolio
				</ListItem>
				<ListItem currentPath={currentPath} href='/work'>
					Work
				</ListItem>

				<li class='flex-1' />

				<ListItem currentPath={currentPath} href='mailto:hi@mallendeo.com'>
					<FiMail
						class={clsx(
							currentPath === '/contact' ? 'text-rose' : 'text-black',
						)}
						size={24}
					/>
				</ListItem>
				<ListItem currentPath={currentPath} href='/cv'>
					<FiFile size={20} />
					CV
				</ListItem>
			</ul>
		</nav>
	</header>
)

export default MainHeader
