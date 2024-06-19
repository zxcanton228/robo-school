import "./Feedback.sass"
import Form from "./Form/Form"
import Img from "./Img/Img"
import Text from "./Text/Text"
const Feedback = () => {
	return (
		<section className='feedback'>
			<div className='container feedback__wrapper'>
				<Text />
				<Form />
			</div>
			<Img />
		</section>
	)
}

export default Feedback
