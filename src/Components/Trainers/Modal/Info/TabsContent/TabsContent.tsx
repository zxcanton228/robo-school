import { useTabs } from "../../../../../store"

import Courses from "./Courses"
import Info from "./Info"

const TabsContent = () => {
	const tab = useTabs(state => state.pickTab)

	switch (tab) {
		case 1:
			return (
				<div className='tabs__content'>
					<Info />
					<Courses title />
				</div>
			)
		case 2:
			return (
				<div className='tabs__content'>
					<Courses />
				</div>
			)
		case 3:
			return (
				<div className='tabs__content'>
					<Courses />
				</div>
			)
		default:
			return (
				<div className='tabs__content'>
					<Info />
					<Courses title />
				</div>
			)
	}
}

export default TabsContent
