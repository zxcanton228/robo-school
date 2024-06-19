import { motion } from "framer-motion"
import { textAnim } from "../../constants/animation"
import "./Info.sass"
import Statistics from "./Statistics/Statistics"

const Info = () => {
	return (
		<div>
			<motion.section
				initial='hidden'
				viewport={{ amount: 0.1, once: true }}
				whileInView='visible'
				className='container info'
			>
				<motion.p custom={1} variants={textAnim}>
					<span>Robo School</span> – учреждение для формирования кадрового
					педагогического резерва в сфере робототехники программирования
				</motion.p>
				<Statistics />
			</motion.section>
		</div>
	)
}

export default Info
