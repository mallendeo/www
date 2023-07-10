import { Component, For, ParentComponent, createSignal } from 'solid-js'
import { clsx } from 'clsx'
import type { IconTypes } from 'solid-icons'
import {
	createVisibilityObserver,
	withDirection,
	withOccurrence,
	DirectionY,
} from '@solid-primitives/intersection-observer'

const sourceLogoClass = (visible: boolean) =>
	clsx(
		'absolute right-2 bottom-2 rounded-md p-1',
		'transition-all opacity-20 shadow-transparent shadow-sm origin-br',
		'group-hover:(opacity-100 -translate-x-0.8 -translate-y-1 scale-121 shadow-lg)',
		'group-focus-within:(opacity-100 -translate-x-0.8 -translate-y-1 scale-121 shadow-lg)',
		'hover:(scale-130!)',
		visible &&
			'lt-sm:(opacity-100 -translate-x-0.8 -translate-y-1 scale-121 scale-130!)',
	)

const itemClass = clsx(
	'rounded-xl ring-2 ring-transparent overflow-hidden shadow-none transition-all',
	'will-change-transform transform-cpu aspect-[4/3] flex',
)

const ItemTitle = (props: {
	className?: string
	title: string
	show?: boolean
}) => (
	<div class='absolute bottom-0 w-full z-30 p-1'>
		<div
			class={clsx(
				'pl-3 h-11 rounded-lg bg-gray-900/70 text-white w-full flex items-center',
				'transform-gpu translate-y-14 transition-all will-change-transform',
				'group-hover:(translate-y-0!) group-focus-within:(translate-y-0!)',
				'z-30 relative',
				props.show && 'lt-sm:translate-y-0!',
				props.className,
			)}
		>
			<strong class={clsx('text-sm font-semibold')}>{props.title}</strong>
		</div>
	</div>
)

interface AttrProps {
	isVisible?: boolean
}

interface Item {
	title: string
	url?: string
	border?: boolean
	content: Component<AttrProps>
	icon?: IconTypes
	iconClass?: (props: AttrProps) => string
	iconFill?: (props: AttrProps) => string
	class?: (props: AttrProps) => string
}

interface Props {
	class?: string
	items: Item[]
}

const ShowcaseGrid: ParentComponent<Props> = (props) => {
	const useVisibilityObserver = createVisibilityObserver(
		{ threshold: 0.8 },
		withOccurrence(
			withDirection((entry, { occurrence, directionY, visible }) => {
				if (occurrence === 'Leaving') return false
				if (!entry.isIntersecting && directionY === DirectionY.Top && visible) {
					return true
				}
				return entry.isIntersecting
			}),
		),
	)

	return (
		<ul
			class={clsx(
				'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-stretch',
				props.class,
			)}
		>
			<For each={props.items}>
				{(item) => {
					let ref: HTMLLIElement | undefined
					const visible = useVisibilityObserver(() => ref)

					return (
						<li
							ref={(el) => {
								ref = el
							}}
							class={clsx(
								itemClass,
								{
									'ring-1! ring-black/10!': item.border,
								},
								item.class,
							)}
						>
							<div class='relative w-full group'>
								{item.url && (
									<a
										class='absolute w-full h-full top-0 left-0 opacity-0 z-20'
										rel='noopener'
										target='__blank'
										href={item.url}
									>
										{item.title}
									</a>
								)}

								<div class='relative z-0 w-full h-full'>
									<item.content isVisible={visible()} />
								</div>

								<ItemTitle show={visible()} title={item.title} />

								{item.icon && (
									<item.icon
										class={clsx(
											sourceLogoClass(visible()),
											'z-40 transform-gpu will-change-transform',
											item.iconClass?.({ isVisible: visible() }),
										)}
										size={24}
										fill={item.iconFill?.({ isVisible: visible() }) || '#fff'}
									/>
								)}
							</div>
						</li>
					)
				}}
			</For>
		</ul>
	)
}

export default ShowcaseGrid
