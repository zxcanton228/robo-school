import Phone from "../Phone/Phone"
import "./Header.sass"
const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>ROBO.SCHOOL</h1>
			<nav className='header__nav'>
				<a href='#' className='header__link'>
					О школе
				</a>
				<a href='#' className='header__link'>
					Тренеры
				</a>
				<a href='#' className='header__link'>
					Стоимость
				</a>
			</nav>
			<Phone />
		</header>
	)
}

export default Header
