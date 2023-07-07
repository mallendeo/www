import type { ParentComponent } from 'solid-js'
import AppHeader from './AppHeader'

const MainLayout: ParentComponent = (props) => (
	<div class='container mx-auto px-8'>
		<AppHeader />

		{props.children}
	</div>
)

export default MainLayout
