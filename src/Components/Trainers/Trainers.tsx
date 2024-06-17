import Title from "../ui/Title/Title"
import Trainer from "./Trainer/Trainer"
import { trainersData } from "./trainers.data"
import "./Trainers.sass"
const Trainers = () => {
	return (
		<div className='container'>
			<Title>Профессиональные тренеры</Title>
			<section className='trainers'>
				{trainersData.map(trainer => (
					<Trainer trainer={trainer} key={trainer.id} />
				))}
			</section>
		</div>
	)
}

export default Trainers
