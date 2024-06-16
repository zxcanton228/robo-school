import Before from "./Components/Before/Before"
import Info from "./Components/Info/Info"
import Landing from "./Components/Landing/Landing"
import Footer from "./Components/Layout/Footer/Footer"
import Header from "./Components/Layout/Header/Header"
import Packets from "./Components/Packets/Packets"
import Trainers from "./Components/Trainers/Trainers"

function App() {
	return (
		<>
			<Header />
			<main>
				<Landing />
				<Info />
				<Before />
				<Trainers />
				<Packets />
			</main>
			<Footer />
		</>
	)
}

export default App
