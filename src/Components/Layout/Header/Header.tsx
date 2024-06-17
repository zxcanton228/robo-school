import Phone from "../Phone/Phone"
import "./Header.sass"
import MobNav from "./MobNav/MobNav"
import Nav from "./Nav/Nav"
const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>ROBO.SCHOOL</h1>
			<Nav />
			<MobNav />
			<Phone />
		</header>
	)
}

export default Header
