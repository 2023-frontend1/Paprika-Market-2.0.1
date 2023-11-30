import Button from '../../components/button/button'
import styled from 'styled-components'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../styles/themes/@index'
import mainTopImg from '/main_top.png'
import mainSecondImg from '/main_second.webp'
import mainThirdImg from '/main_third.webp'
import mainFourthImg from '/main_fourth.webp'
import mainLastImg from '/main_last.webp'

const MainPage = () => {
	return (
		<>
			<S.Wrapper $bgColor={color.orange[0]}>
				<div>
					<S.ContentTitle></S.ContentTitle>
					<S.Title>
						당신 근처의
						<br></br>
						지역 생활 커뮤니티
					</S.Title>
					<S.Content>
						동네라서 가능한 모든 것<br></br>
						파프리카에서 가까운 이웃과 함께해요
					</S.Content>
					<div>
						<Button style={{ marginRight: '10px' }}>Google Play</Button>
						<Button>Google Play</Button>
					</div>
				</div>
				<S.Img src={mainTopImg} />
			</S.Wrapper>

			<S.Wrapper>
				<S.Img src={mainSecondImg} />
				<div>
					<S.ContentTitle>중고거래</S.ContentTitle>
					<S.Title>
						믿을만한
						<br></br>
						이웃 간 중고거래
					</S.Title>
					<S.Content>
						동네 주민들과 가깝고 따뜻한 거래를
						<br></br>
						지금 경험해보세요
					</S.Content>
					<div>
						<Button
							color="gray"
							size="default"
							shape="normal"
							style={{ marginRight: '10px' }}
						>
							인기 매물 보기
						</Button>
						<Button color="gray" size="default" shape="normal">
							믿을 수 있는 중고거래
						</Button>
					</div>
				</div>
			</S.Wrapper>

			<S.Wrapper $bgColor={color.red[0]}>
				<div>
					<S.ContentTitle>동네생활</S.ContentTitle>
					<S.Title>
						이웃만 아는
						<br></br>
						동네 정보와 이야기
					</S.Title>
					<S.Content>
						우리동네의 다양한 정보와 이야기를
						<br></br>
						공감과 댓글로 나누어요.
					</S.Content>
					<Button color="gray" size="default" shape="normal">
						우리 동네 이야기
					</Button>
				</div>
				<S.Img src={mainThirdImg}></S.Img>
			</S.Wrapper>

			<S.Wrapper>
				<S.Img src={mainFourthImg} />
				<div>
					<S.ContentTitle>알바</S.ContentTitle>
					<S.Title>
						걸어서 10분!
						<br></br>
						동네 알바 구하기
					</S.Title>
					<S.Content>
						쉽고, 편하게
						<br></br>
						파프리카로 동네 알바를 구할 수 있어요.
					</S.Content>
					<Button color="gray" size="default" shape="normal">
						내근처 알바 보기
					</Button>
				</div>
			</S.Wrapper>

			<S.Wrapper $bgColor={color.green[0]}>
				<div>
					<S.ContentTitle>동네업체</S.ContentTitle>
					<S.Title>
						내 근처에서 찾는
						<br></br>
						동네업체
					</S.Title>
					<S.Content>
						이웃들의 추천 후기를 확인하고
						<br></br>
						동네 곳곳의 업체들을 찾을 수 있어요.
					</S.Content>
					<Button color="gray" size="default" shape="normal">
						당근 동네업체 보기
					</Button>
				</div>
				<S.Img src={mainLastImg} />
			</S.Wrapper>
		</>
	)
}

export default MainPage

const Wrapper = styled.div`
	width: 1024px;
	margin: 0px auto;
	${flexAlign.alignCenter}
	justify-content: space-between;
	background-color: ${({ $bgColor }) => $bgColor};
`
const Img = styled.img`
	width: 655px;
	height: 750px;
`
const ContentTitle = styled.p`
	font-weight: ${fontWeight.bold};
	font-size: ${fontSize.small};
	color: ${color.orange[100]};
	margin-bottom: 1rem;
`
const Content = styled.p`
	font-size: ${fontSize.small};
	color: ${color.grayScale[60]};
	line-height: 3rem;
	margin-bottom: 2rem;
`
const Title = styled.h1`
	font-size: 42px;
	line-height: 57px;
	margin-bottom: 10px;
`

const S = {
	Content,
	ContentTitle,
	Wrapper,
	Img,
	Title,
}
