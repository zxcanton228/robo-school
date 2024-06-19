import { IMG_URL } from "../../constants/sys"
import Button from "../ui/Button/Button"
import "./Landing.sass"
const Landing = () => {
	return (
		<div className='landing'>
			<div className='container'>
				<section className='landing__title'>
					<h1>ROBO SCHOOL</h1>
					<p>
						Курсы повышения квалификации по робототехнике для педагогов
						начальной школы
					</p>
					<Button>Записаться на пробы</Button>
				</section>
				<img alt='logo' src={`${IMG_URL}landing.svg`}></img>
			</div>
		</div>
	)
}

export default Landing
