import type { PropsWithChildren } from "react"
import "./Title.sass"
export default function Title({ children }: PropsWithChildren) {
	return <h1 className='title'>{children}</h1>
}
