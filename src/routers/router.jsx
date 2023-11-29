import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/@index'
import {
	EtcPage,
	MainPage,
	MarketPage,
	ProductPage,
	UserPage,
} from '../pages/@index'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: '/market',
				element: <MarketPage />,
			},
			{
				path: '/product/:productId',
				element: <ProductPage />,
			},
			{
				path: '/user/:userId',
				element: <UserPage />,
			},
			{
				path: '/etc',
				element: <EtcPage />,
			},
		],
	},
])

export default Router
