import { FC, useState } from "react"
import Modal from "../Modal/Modal"
import { ITrainer } from "../trainers.data"
import "./Trainer.sass"
interface IProp {
	trainer: ITrainer
}
const Trainer: FC<IProp> = ({ trainer }) => {
	const [isModal, setIsModal] = useState<boolean>(false)
	return (
		<>
			<section className='trainer'>
				<img src={`/humans/${trainer.avatar}`} alt={trainer.name} />
				<section className='trainer__text'>
					<h1>{trainer.name}</h1>
					<p>{trainer.job}</p>
					<button onClick={() => setIsModal(true)}>Подробнее</button>
				</section>
			</section>
			{isModal && <Modal trainer={trainer} close={setIsModal} />}
		</>
	)
}

export default Trainer
