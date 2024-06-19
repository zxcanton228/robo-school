import { motion } from "framer-motion"
import { textAnim } from "../../constants/animation"
import { IMG_URL } from "../../constants/sys"
import Button from "../ui/Button/Button"
import "./Landing.sass"

const Landing = () => {
	return (
		<div className='landing'>
			<div className='container'>
				<motion.section
					initial='hidden'
					viewport={{ once: true }}
					whileInView='visible'
					className='landing__title'
				>
					<motion.h1 custom={2} variants={textAnim}>
						ROBO SCHOOL
					</motion.h1>
					<motion.p custom={4} variants={textAnim}>
						Курсы повышения квалификации по робототехнике для педагогов
						начальной школы
					</motion.p>
					<Button custom={4} variants={textAnim}>
						Записаться на пробы
					</Button>
				</motion.section>
				<img alt='logo' src={`${IMG_URL}landing.svg`}></img>
			</div>
		</div>
	)
}

export default Landing
