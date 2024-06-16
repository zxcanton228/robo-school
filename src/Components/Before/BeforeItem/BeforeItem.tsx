import { FC } from "react"
import { IBefore } from "../before.data"

const BeforeItem: FC<IBefore> = ({ text, title }) => {
	return (
		<section className='before__item'>
			<h1>{title}</h1>
			<p>{text}</p>
		</section>
	)
}

export default BeforeItem
