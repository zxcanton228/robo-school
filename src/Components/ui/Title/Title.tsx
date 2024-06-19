import { motion } from "framer-motion"
import { FC, LegacyRef, ReactNode, forwardRef } from "react"
interface IProps {
	children: ReactNode
	ref: LegacyRef<HTMLHeadingElement>
}
const MTitle: FC<IProps> = forwardRef(({ children, ref }) => {
	return (
		<h1 className='title' ref={ref}>
			{children}
		</h1>
	)
})
const Title = motion(MTitle)
export default Title
