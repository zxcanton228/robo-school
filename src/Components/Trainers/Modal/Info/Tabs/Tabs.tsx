import { useTabs } from "../../../../../store"

const tabsData: { id: number; title: string }[] = [
	{
		id: 1,
		title: "Образование",
	},
	{
		id: 2,
		title: "Опыт работы",
	},
	{
		id: 3,
		title: "Награды",
	},
]

const Tabs = () => {
	const setPickTab = useTabs(state => state.setPickTab)
	const tab = useTabs(state => state.pickTab)
	return (
		<>
			<section className='tabs'>
				{tabsData.map(({ id, title }) => (
					<button
						key={id}
						className={tab === id ? "active" : ""}
						onClick={() => setPickTab(id)}
					>
						{title}
					</button>
				))}
			</section>
			<hr />
		</>
	)
}

export default Tabs
