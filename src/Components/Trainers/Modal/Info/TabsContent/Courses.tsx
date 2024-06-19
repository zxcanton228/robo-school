import { useTrainers } from "../../../../../store"

const Courses = ({ title }: { title?: boolean }) => {
	const { courses } = useTrainers(state => state.trainer)
	return (
		<section className='tabs__courses'>
			{title && <h2 className='tabs__courses-title'>Курсы и тренинги</h2>}
			<ul>
				{courses.map(course => (
					<li>{course}</li>
				))}
			</ul>
		</section>
	)
}

export default Courses
