import { FC } from "react"
import Button from "../../ui/Button/Button"
import { IPacket } from "../packet.data"
import "./Packet.sass"
const Packet: FC<IPacket> = ({ description, isActive, price, rang }) => {
	return (
		<section className={isActive ? "packet active" : "packet"}>
			<h3>{rang}</h3>
			<h1>{price} ₽</h1>
			<p>{description}</p>
			<div className='btn-cont'>
				<Button>Оставить заявку</Button>
			</div>
		</section>
	)
}

export default Packet
