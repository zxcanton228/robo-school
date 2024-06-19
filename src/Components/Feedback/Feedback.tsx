import { IMG_URL } from "../../constants/sys"
import "./Feedback.sass"
import Form from "./Form/Form"
const Feedback = () => {
	return (
		<section className='feedback'>
			<div className='container feedback__wrapper'>
				<section className='feedback__text'>
					<h1>Запишитесь на курс со скидкой 10%</h1>
					<p>Акция действительна до 10 марта 2022 года</p>
				</section>
				<Form />
			</div>
			<div className='img'>
				<img
					className='feedback__img'
					src={`${IMG_URL}procent.svg`}
					alt='Procents'
				/>
			</div>
		</section>
	)
}

export default Feedback
