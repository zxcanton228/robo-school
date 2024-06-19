import { FC } from "react"
import Button from "../../ui/Button/Button"
import { IPacket } from "../packet.data"
import "./Packet.sass"
const Packet: FC<IPacket> = ({ description, isActive, price, rang }) => {
	return (
		<article className={isActive ? "packet active" : "packet"}>
			<h3 className='packet__rang'>– {rang} –</h3>
			<div className='packet__text'>
				<div>
					<h1>{price.toLocaleString()} ₽</h1>
					<p>{description}</p>
				</div>
			</div>
			<div className='packet__btn-cont'>
				<Button>Оставить заявку</Button>
			</div>
		</article>
	)
}

export default Packet
