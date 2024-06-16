import { FC } from "react"
import { IStatistic } from "../statistics.data"

const Statistic: FC<IStatistic> = ({ count, text }) => {
	return (
		<section className='statistic'>
			<h1>{count.toLocaleString()}</h1>
			<p>{text}</p>
		</section>
	)
}

export default Statistic
