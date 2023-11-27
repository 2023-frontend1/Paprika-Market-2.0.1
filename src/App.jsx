import { RouterProvider } from 'react-router-dom'
import Router from './routers/router'
import GlobalStyles from './styles/global_styles'

function App() {
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={Router} />
		</>
	)
}
export default App
