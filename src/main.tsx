import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"

import "./styles/global.sass"
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter basename='/robo-school'>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
