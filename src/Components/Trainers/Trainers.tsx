import { useRef } from "react"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { useResize } from "../../hooks/useResize"
import { useModal } from "../../store"
import Title from "../ui/Title/Title"
import Modal from "./Modal/Modal"
import Trainer from "./Trainer/Trainer"
import "./Trainers.sass"
import { trainersData } from "./trainers.data"

const Trainers = () => {
	let sliderRef = useRef(null)
	const { width, isBig, isMedium, isSmall } = useResize()
	const next = () => {
			// @ts-ignore
			sliderRef.slickNext()
		},
		previous = () => {
			// @ts-ignore
			sliderRef.slickPrev()
		},
		isOpen = useModal(state => state.isOpen),
		settings = {
			dots: false,
			lazyLoad: true,
			infinite: true,
			speed: 500,
			slidesToShow: isBig ? 3.2 : isMedium ? 2 : isSmall && 1,
			slidesToScroll: 1,
			initialSlide: 2,
		}
	return (
		<>
			<div className='container'>
				<Title>Профессиональные тренеры</Title>
				<section className='trainers'>
					{/* @ts-ignore */}
					<Slider
						ref={slider => {
							// @ts-ignore
							sliderRef = slider
						}}
						{...settings}
					>
						{trainersData.map(trainer => (
							<Trainer trainer={trainer} key={trainer.id} />
						))}
					</Slider>
					<div className='slider__control'>
						<section className='slider__control-arrows'>
							<button className='button' onClick={previous}>
								<GrFormPrevious />
							</button>
							<button className='button' onClick={next}>
								<GrFormNext />
							</button>
						</section>
					</div>
				</section>
			</div>
			{isOpen && <Modal />}
		</>
	)
}

export default Trainers
