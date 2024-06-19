import { useModal } from "../../../../store"

const Close = () => {
	const close = useModal(state => state.close)
	return (
		<div className='close__btn'>
			<button className='close' onClick={() => close()}>
				Закрыть
			</button>
		</div>
	)
}

export default Close
