import { motion } from "framer-motion"
import { FC, LegacyRef, forwardRef } from "react"
import { IBefore } from "../before.data"

const MBeforeItem: FC<IBefore> = forwardRef(
	({ text, title }, ref: LegacyRef<HTMLElement>) => {
		return (
			<section className='before__item' ref={ref}>
				<h1>{title}</h1>
				<p>{text}</p>
			</section>
		)
	}
)
const BeforeItem = motion(MBeforeItem)
export default BeforeItem
