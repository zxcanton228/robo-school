import { FC } from "react"
import { IMG_URL } from "../../../constants/sys"
import { useModal, useTrainers } from "../../../store"
import { ITrainer } from "../trainers.data"
import "./Trainer.sass"
interface IProp {
	trainer: ITrainer
}
const Trainer: FC<IProp> = ({ trainer }) => {
	const open = useModal(state => state.open),
		setTrainer = useTrainers(state => state.setTrainer)
	return (
		<>
			<section className='trainer'>
				<img src={`${IMG_URL}humans/${trainer.avatar}`} alt={trainer.name} />
				<section className='trainer__text'>
					<h1>{trainer.name}</h1>
					<p>{trainer.job}</p>
					<button
						onClick={() => {
							open()
							setTrainer(trainer)
						}}
					>
						Подробнее
					</button>
				</section>
			</section>
		</>
	)
}

export default Trainer
