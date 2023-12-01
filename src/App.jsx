import { RouterProvider } from 'react-router-dom'
import { worker } from './mocks/browser'
import Router from './routers/router'
import GlobalStyles from './styles/global_styles'

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker && worker.start()
	}
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={Router} />
		</>
	)
}
export default App
