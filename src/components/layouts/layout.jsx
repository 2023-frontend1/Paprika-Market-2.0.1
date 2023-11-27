import { Header, Footer, CenterBox } from './componets/@index'
import { Outlet } from 'react-router-dom'
const Layout = () => {
	return (
		<>
			<Header />
			<CenterBox>
				<Outlet />
			</CenterBox>
			<Footer />
		</>
	)
}
export default Layout
