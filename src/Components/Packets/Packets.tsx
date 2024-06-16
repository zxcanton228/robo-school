import Title from "../ui/Title/Title"
import Packet from "./Packet/Packet"
import "./Packets.sass"
import { packetsData } from "./packet.data"
const Packets = () => {
	return (
		<div className='container'>
			<Title>Выберите нужный пакет</Title>
			<section className='packets'>
				{packetsData.map(({ description, isActive, price, rang }, index) => (
					<Packet
						description={description}
						isActive={isActive}
						rang={rang}
						price={price}
						key={index}
					/>
				))}
			</section>
		</div>
	)
}

export default Packets
