import Close from "./Close/Close"
import Info from "./Info/Info"
import "./Modal.sass"
import ModalCard from "./ModalCard/ModalCard"

const Modal = () => {
	return (
		<div className='modal'>
			<div className='modal__body'>
				<ModalCard />
				<Info />
				<Close />
			</div>
		</div>
	)
}

export default Modal
