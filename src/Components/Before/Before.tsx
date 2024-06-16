import Title from "../ui/Title/Title"
import "./Before.sass"
import BeforeItem from "./BeforeItem/BeforeItem"
import { beforeData } from "./before.data"
const Before = () => {
	return (
		<div className='before__wrapper'>
			<div className='container before'>
				<Title>Что вы получите после курса</Title>
				<section className='befores'>
					{beforeData.map(({ text, title }, index) => (
						<BeforeItem text={text} title={title} key={index} />
					))}
				</section>
			</div>
		</div>
	)
}

export default Before
