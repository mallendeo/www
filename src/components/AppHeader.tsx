import clsx from 'clsx'
import { BiLogosDribbble } from 'solid-icons/bi'

export default () => (
	<header class={clsx('p-2 px-4 bg-gray-100 rounded-lg my-4')}>
		<nav>
			<ul>
				<li>
					<BiLogosDribbble size={24} />
				</li>
			</ul>
		</nav>
	</header>
)
