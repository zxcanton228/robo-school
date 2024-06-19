import { motion } from "framer-motion"
import { blockAnim } from "../../constants/animation"
import Title from "../ui/Title/Title"
import Packet from "./Packet/Packet"
import "./Packets.sass"
import { packetsData } from "./packet.data"

const Packets = () => {
	return (
		<div className='container'>
			<Title>Выберите нужный пакет</Title>

			<motion.section
				className='packets'
				initial='hidden'
				viewport={{ amount: 0.2, once: true }}
				whileInView='visible'
			>
				{packetsData.map(({ description, isActive, price, rang }, index) => (
					<Packet
						variants={blockAnim}
						custom={index}
						description={description}
						isActive={isActive}
						rang={rang}
						price={price}
						key={index}
					/>
				))}
			</motion.section>
		</div>
	)
}

export default Packets
