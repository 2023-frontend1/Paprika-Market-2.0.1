import { Header, Footer, SideBar } from './componets/@index'
import { Outlet } from 'react-router-dom'
const Layout = () => {
	return (
		<>
			<Header />
			<SideBar />
			<Outlet />

			<Footer />
		</>
	)
}
export default Layout
