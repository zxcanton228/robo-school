import { motion } from "framer-motion"
import { textAnim } from "../../../constants/animation"

const Text = () => {
	return (
		<motion.section
			className='feedback__text'
			initial='hidden'
			viewport={{ amount: 0.2, once: true }}
			whileInView='visible'
		>
			<motion.h1 variants={textAnim} custom={1}>
				Запишитесь на курс со скидкой 10%
			</motion.h1>
			<motion.p variants={textAnim} custom={2}>
				Акция действительна до 10 марта 2022 года
			</motion.p>
		</motion.section>
	)
}

export default Text
