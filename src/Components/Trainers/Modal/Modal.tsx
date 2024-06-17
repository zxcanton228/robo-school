import { Dispatch, FC, SetStateAction } from "react"
import { ITrainer } from "../trainers.data"
import "./Modal.sass"
interface IProp {
	trainer: ITrainer
	close: Dispatch<SetStateAction<boolean>>
}
const Modal: FC<IProp> = ({ trainer: { name, job }, close }) => {
	return (
		<div className='modal'>
			<section>
				{name}:{job}
				<button onClick={() => close(false)}>close</button>
			</section>
		</div>
	)
}

export default Modal
