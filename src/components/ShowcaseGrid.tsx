import { For } from 'solid-js'
import { clsx } from 'clsx'
import { BiLogosDribbble } from 'solid-icons/bi'
import { dribbbleItems, type DribbbleItem } from '../data/dribbble'
import { codepenItems, type CodepenItem } from '../data/codepen'

type ShowcaseItem = DribbbleItem | CodepenItem

const DRIBBBLE_USER_ID = 351311

const showcaseList: ShowcaseItem[] = [...codepenItems, ...dribbbleItems]

const itemClass = clsx(
	'hover:(scale-105 shadow-lg border-black)',
	'focus-within:(scale-105 shadow-lg border-black)',
	'rounded-xl border-2 border-transparent overflow-hidden shadow-none transition-all',
)

export default () => (
	<ul class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-stretch'>
		<For each={showcaseList}>
			{(item) => (
				<li class={clsx(itemClass)}>
					{item.type === 'dribbble' && (
						<a
							class='relative group'
							rel='noopener'
							target='__blank'
							href={item.url}
						>
							<img
								class={clsx(
									'w-full transition-all duration-500',
									'group-hover:(scale-105)',
								)}
								src={item.img}
								alt={item.title}
							/>

							<BiLogosDribbble
								class={clsx(
									'absolute right-2 bottom-2 rounded-md p-1',
									'transition-all bg-[#D13880] opacity-20 shadow-transparent shadow-sm',
									'group-hover:(opacity-100 -translate-x-1 -translate-y-1 scale-120 shadow-[#D1388070] shadow-lg)',
									'group-focus:(opacity-100 -translate-x-1 -translate-y-1 scale-120 shadow-[#D1388070] shadow-lg)',
									'hover:(scale-130!)',
								)}
								size={24}
								fill='#fff'
							/>
						</a>
					)}
					{item.type === 'codepen' && <a href='#a'>codepen</a>}
				</li>
			)}
		</For>
	</ul>
)
