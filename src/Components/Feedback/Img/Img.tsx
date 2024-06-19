import { IMG_URL } from "../../../constants/sys"

const Img = () => {
	return (
		<div className='img'>
			<img
				className='feedback__img'
				src={`${IMG_URL}procent.svg`}
				alt='Procents'
			/>
		</div>
	)
}

export default Img
