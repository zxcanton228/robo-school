import { FaAlignRight, FaPhoneAlt } from "react-icons/fa"

const MobNav = () => {
	return (
		<nav className='header-mobile__nav'>
			<button>
				<FaPhoneAlt />
			</button>
			<button>
				<FaAlignRight />
			</button>
		</nav>
	)
}

export default MobNav
