import { FaFacebook } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { useTrainers } from "../../../../store"
const ModalCard = () => {
	const { avatar, job, name } = useTrainers(state => state.trainer)
	return (
		<section className='modal__card'>
			<img className='modal__img' src={`/humans/${avatar}`} alt='avatar' />
			<section className='modal__id'>
				<h1>{name}</h1>
				<p>{job}</p>
				<section className='socials'>
					<FaFacebook />
					<RiInstagramFill />
				</section>
			</section>
		</section>
	)
}

export default ModalCard
