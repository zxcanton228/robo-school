import { useTrainers } from "../../../../../store"

const Info = () => {
	const { info } = useTrainers(state => state.trainer)
	return (
		<section className='tabs__info'>
			<ul>
				{info.map(inf => (
					<li>{inf}</li>
				))}
			</ul>
		</section>
	)
}

export default Info
