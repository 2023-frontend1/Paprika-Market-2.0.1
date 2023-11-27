import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '/public/logo.png'
import {
	fontSize,
	fontWeight,
	color,
	flexAlign,
} from '../../../styles/themes/@index'
const Header = () => {
	const navigate = useNavigate()
	const OnCategoryClick = (path) => {
		navigate(path)
	}
	const naviInfo = [
		{ text: '중고거래', url: '/market' },
		{ text: '동네업체', url: '/company' },
		{ text: '알바', url: '/part-time' },
		{ text: '부동산 직거래', url: '/estate' },
		{ text: '중고차 직거래', url: '/used-car' },
	]

	return (
		<S.Div_HeaderContain>
			<S.Div_HeaderNav>
				<S.Div_HeaderUl>
					<S.Img_Logo
						onClick={() => {
							OnCategoryClick('/')
						}}
						src={logo}
						alt=""
					/>
					{naviInfo.map((info, idx) => {
						return (
							<S.Li_Link
								key={idx}
								onClick={() => {
									OnCategoryClick(`${info.url}`)
								}}
							>
								{info.text}
							</S.Li_Link>
						)
					})}
				</S.Div_HeaderUl>
			</S.Div_HeaderNav>
			<S.Div_SearchArea>
				<form action="">
					<S.Inp_SearchInput
						type="text"
						placeholder="물품이나 동네를 검색해보세요"
					/>
				</form>
				<button>채팅하기(버튼컴포넌트 만들어지면)</button>
			</S.Div_SearchArea>
		</S.Div_HeaderContain>
	)
}
export default Header

const Div_HeaderContain = styled.div`
	width: 100vw;
	position: fixed;
	top: 0px;
	height: 68px;
	background-color: ${color.grayScale[100]};
	z-index: 100;
	${flexAlign.flexCenter}
`

const Div_HeaderNav = styled.div`
	width: 91rem;
`

const Div_HeaderUl = styled.ul`
	${flexAlign.flexCenter}
	margin-left: 13rem;
`
const Div_SearchArea = styled.div`
	${flexAlign.flexCenter}
	margin-right: 20rem;
`
const Inp_SearchInput = styled.input`
	border: none;
	background-color: ${color.grayScale[80]};
	border-radius: 1.5rem;
	width: 28rem;
	height: 38px;
	padding-left: 1rem;
	margin-right: 3rem;
`
const Li_Link = styled.li`
	margin-right: 3rem;
	font-size: ${fontSize.small};
	font-weight: ${fontWeight.bold};
	color: ${color.grayScale[40]};
	&:hover {
		color: ${color.grayScale[20]};
	}
`
const Img_Logo = styled.img`
	width: 5rem;
	height: 5rem;
	margin-right: 2.5rem;
`

const S = {
	Div_HeaderContain,
	Div_HeaderNav,
	Div_HeaderUl,
	Div_SearchArea,
	Inp_SearchInput,
	Li_Link,
	Img_Logo,
}
