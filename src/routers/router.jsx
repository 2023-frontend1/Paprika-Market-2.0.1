import Layout from "../components/layouts/layout"
import {
  MainPage,
  MarketPage,
  ProductPage,
  UserPage,
  EtcPage,
} from "../pages/@index"
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/market",
        element: <MarketPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/user/:userId",
        element: <UserPage />,
      },
      {
        path: "/etc",
        element: <EtcPage />,
      }
    ],
  },
])

export default Router
