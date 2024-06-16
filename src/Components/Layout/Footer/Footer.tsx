import Phone from "../Phone/Phone"
import "./Footer.sass"
const Footer = () => {
	return (
		<footer className='footer'>
			<section className='footer__title'>
				<h1>ROBO.SCHOOL</h1>
				<h3>© ROBO.SCHOOL</h3>
			</section>
			<Phone />
		</footer>
	)
}

export default Footer
