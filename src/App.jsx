import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { worker } from './mocks/browser'
import Router from './routers/router'
import { store } from './stores/store'
import GlobalStyles from './styles/global_styles'

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker && worker.start()
	}
	return (
		<>
			<Provider store={store}>
				<GlobalStyles />
				<RouterProvider router={Router} />
			</Provider>
		</>
	)
}
export default App
