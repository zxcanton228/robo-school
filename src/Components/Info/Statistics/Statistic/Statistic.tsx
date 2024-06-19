import { motion } from "framer-motion"
import { FC, LegacyRef, forwardRef } from "react"
import { IStatistic } from "../statistics.data"

const MStatistic: FC<IStatistic> = forwardRef(
	({ count, text }, ref: LegacyRef<HTMLElement>) => {
		return (
			<section className='statistic' ref={ref}>
				<h1>{count.toLocaleString()}</h1>
				<p>{text}</p>
			</section>
		)
	}
)
const Statistic = motion(MStatistic)
export default Statistic
