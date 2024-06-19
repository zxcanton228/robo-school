import { motion } from "framer-motion"
import { blockAnim } from "../../constants/animation"
import Title from "../ui/Title/Title"
import "./Before.sass"
import BeforeItem from "./BeforeItem/BeforeItem"
import { beforeData } from "./before.data"

const Before = () => {
	return (
		<div className='before__wrapper'>
			<div className='container before'>
				<Title>Что вы получите после курса</Title>
				<motion.section
					className='befores'
					initial='hidden'
					viewport={{ amount: 0.2, once: true }}
					whileInView='visible'
				>
					{beforeData.map(({ text, title }, index) => (
						<BeforeItem
							variants={blockAnim}
							custom={index}
							text={text}
							title={title}
							key={index}
						/>
					))}
				</motion.section>
			</div>
		</div>
	)
}

export default Before
