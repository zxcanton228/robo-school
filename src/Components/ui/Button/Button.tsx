import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import "./Button.sass"
const Button: FC<
	PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, ...rest }) => {
	return (
		<button {...rest} className={className ? `${className} btn` : "btn"}>
			{children}
		</button>
	)
}

export default Button
