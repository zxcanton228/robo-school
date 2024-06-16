import Statistic from "./Statistic/Statistic"
import { statisticsData } from "./statistics.data"
import "./Statistics.sass"
const Statistics = () => {
	return (
		<section className='statistics'>
			{statisticsData.map(({ count, text }, index) => (
				<Statistic count={count} text={text} key={index} />
			))}
		</section>
	)
}

export default Statistics
