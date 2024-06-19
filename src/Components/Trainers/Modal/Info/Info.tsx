import "./Info.sass"
import Tabs from "./Tabs/Tabs"
import TabsContent from "./TabsContent/TabsContent"
const Info = () => {
	return (
		<div className='modal__info'>
			<Tabs />
			<TabsContent />
		</div>
	)
}

export default Info
