import styled from 'styled-components'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../../styles/themes/@index'
import { helpCatagory, moreAboutCatagory, serviceCatagory } from '../constant'
const Footer = () => {
	return (
		<S.Foo_Footer>
			<S.Div_FooterWrapper>
				<S.Sec_FirstSection>
					<S.Div_FooterNav>
						<Ul_TextUl>
							{serviceCatagory.map((info, idx) => {
								return (
									<S.Li_NavList
										key={idx}
										onClick={() => {
											OnCategoryClick(`${info.url}`)
										}}
									>
										{info.text}
									</S.Li_NavList>
								)
							})}
						</Ul_TextUl>
						<Ul_TextUl>
							{helpCatagory.map((info, idx) => {
								return (
									<S.Li_NavList
										key={idx}
										onClick={() => {
											OnCategoryClick(`${info.url}`)
										}}
									>
										{info.text}
									</S.Li_NavList>
								)
							})}
						</Ul_TextUl>
						<Ul_TextUl>
							{moreAboutCatagory.map((info, idx) => {
								return (
									<S.Li_NavList
										key={idx}
										onClick={() => {
											OnCategoryClick(`${info.url}`)
										}}
									>
										{info.text}
									</S.Li_NavList>
								)
							})}
						</Ul_TextUl>
					</S.Div_FooterNav>
					<S.Div_DownLoadWrap>
						<S.P_DownLoadText>파프리카 앱 다운로드</S.P_DownLoadText>
						{/* <Div_ButtonWrap>
							<Button>app store</Button>
							<Button>google play</Button>
						</Div_ButtonWrap> */}
					</S.Div_DownLoadWrap>
				</S.Sec_FirstSection>
				<S.Sec_SecondSection>
					<ul>
						<li>
							<S.Spa_Point>
								<b>대표</b> 킹파프리카
							</S.Spa_Point>
							<S.Spa_Point>
								<b>사업자번호</b> 375-87-000888
							</S.Spa_Point>
						</li>
						<S.Spa_Point>
							<b>직업정보제공사업 신고번호</b> J1200020200016
						</S.Spa_Point>
						<S.Spa_Point>
							<b>주소</b> 서울특별시 강남구 현익빌딩 4층
						</S.Spa_Point>
						<li>
							<S.Spa_Point>
								<b>전화</b> 1544-0021
							</S.Spa_Point>
							<S.Spa_Point>
								<b>고객문의</b> cs@paprikaservice.com
							</S.Spa_Point>
						</li>
					</ul>
					<S.Div_InquiryBox>
						<S.A_Link>제휴문의</S.A_Link>
						<S.A_Link>광고문의</S.A_Link>
						<S.A_Link>PR문의</S.A_Link>
						<S.A_Link>IR문의</S.A_Link>
					</S.Div_InquiryBox>
				</S.Sec_SecondSection>
				<S.Sec_ThirdSection>
					<S.A_Link>이용약관</S.A_Link>
					<S.A_Link>개인정보처리방침</S.A_Link>
					<S.A_Link>위치기반서비스 이용약관</S.A_Link>
					<S.A_Link>이용자보호 비전과 계획</S.A_Link>
					<S.A_Link>청소년보호정책</S.A_Link>
				</S.Sec_ThirdSection>
			</S.Div_FooterWrapper>
		</S.Foo_Footer>
	)
}

export default Footer

const Foo_Footer = styled.footer`
	border-top: 1px solid ${color.grayScale[80]};
	width: 100vw;
	background-color: ${color.grayScale[100]};
`
const Div_FooterWrapper = styled.div`
	max-width: 50%;
	margin: 0 auto;
	${flexAlign.directionColumn}
`
const Sec_FirstSection = styled.section`
	padding: 3.6rem 0;
	${flexAlign.justifyBetween}
`
const Div_FooterNav = styled.div`
	display: flex;
`
const Ul_TextUl = styled.ul`
	padding: 2rem;
`
const Li_NavList = styled.li`
	font-size: ${fontSize.tiny};
	margin-bottom: 1.6rem;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`
const Div_DownLoadWrap = styled.div`
	margin-right: 16rem;
	${flexAlign.directionColumn}
`
const Div_ButtonWrap = styled.div`
	${flexAlign.justifyBetween}
`
const P_DownLoadText = styled.p`
	font-weight: ${fontWeight.bold};
`
const Sec_SecondSection = styled.section`
	${flexAlign.justifyBetween}
	padding: 2.4rem 0;
	border-top: 1px solid ${color.grayScale[80]};
`
const Div_InquiryBox = styled.div`
	margin-left: 40px;
`
const Sec_ThirdSection = styled.section`
	padding-bottom: 6rem;
	margin-left: 40px;
`
const A_Link = styled.a`
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.thin};
	margin-right: 1.2rem;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`
const Spa_Point = styled.span`
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.thin};
	&::after {
		content: ' | ';
	}
`
const S = {
	Foo_Footer,
	Div_FooterWrapper,
	Sec_FirstSection,
	Div_FooterNav,
	Ul_TextUl,
	Li_NavList,
	Div_DownLoadWrap,
	P_DownLoadText,
	Div_ButtonWrap,
	Sec_SecondSection,
	Div_InquiryBox,
	A_Link,
	Sec_ThirdSection,
	Spa_Point,
}
