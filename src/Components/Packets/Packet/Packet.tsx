import { motion } from "framer-motion"
import { FC, LegacyRef, forwardRef } from "react"
import Button from "../../ui/Button/Button"
import { IPacket } from "../packet.data"
import "./Packet.sass"
const MPacket: FC<IPacket> = forwardRef(
	({ description, isActive, price, rang }, ref: LegacyRef<HTMLElement>) => {
		return (
			<article className={isActive ? "packet active" : "packet"} ref={ref}>
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
)
const Packet = motion(MPacket)
export default Packet
