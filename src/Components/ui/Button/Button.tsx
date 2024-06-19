import { motion } from "framer-motion"
import {
	ButtonHTMLAttributes,
	FC,
	LegacyRef,
	PropsWithChildren,
	forwardRef,
} from "react"
import "./Button.sass"
const MButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> =
	forwardRef(
		({ children, className, ...rest }, ref: LegacyRef<HTMLButtonElement>) => {
			return (
				<button
					ref={ref}
					{...rest}
					className={className ? `${className} btn` : "btn"}
				>
					{children}
				</button>
			)
		}
	)
const Button = motion(MButton)
export default Button
