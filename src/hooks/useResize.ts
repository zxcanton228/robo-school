import { useEffect, useState } from "react"
import { SCREEN_LG, SCREEN_SM } from "../constants/breakpoints"
interface IUseResize {
	isSmall: boolean
	isMedium: boolean
	width: number
	isBig: boolean
}
export const useResize = (): IUseResize => {
	const [width, setWidth] = useState<number>(window.innerWidth)

	useEffect(() => {
		const handleResize = (event: any) => {
			setWidth(event?.target?.innerWidth)
		}
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return {
		width,
		isSmall: width <= SCREEN_SM,
		isMedium: width < SCREEN_LG && width > SCREEN_SM,
		isBig: width >= SCREEN_LG,
	}
}
