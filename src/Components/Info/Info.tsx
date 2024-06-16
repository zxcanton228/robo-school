import "./Info.sass"
import Statistics from "./Statistics/Statistics"
const Info = () => {
	return (
		<div>
			<section className='container info'>
				<p>
					<span>Robo School</span> – учреждение для формирования кадрового
					педагогического резерва в сфере робототехники программирования
				</p>
				<Statistics />
			</section>
		</div>
	)
}

export default Info
