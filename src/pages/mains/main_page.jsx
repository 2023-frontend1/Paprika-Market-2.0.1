import { Button } from '../../components/@index'
import styled from 'styled-components'
import { color, fontSize, fontWeight } from '../../styles/themes/@index'
import Wrapper from './wrapper'
import mainTop from '/img_mains/main_top.png'
import mainSecond from '/img_mains/main_second.webp'
import mainThird from '/img_mains/main_third.webp'
import mainFourth from '/img_mains/main_fourth.webp'
import mainLast from '/img_mains/main_last.webp'

const MainPage = () => {
	return (
		<>
			<Wrapper
				bgColor={color.orange[0]}
				imgWidth="60rem"
				imgHeight="70rem"
				src={mainTop}
				marginTop="68px"
				direction="row-reverse"
			>
				<div>
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
						<Button theme="dark" style={{ marginRight: '10px' }}>
							Google Play
						</Button>
						<Button theme="dark">Google Play</Button>
					</div>
				</div>
			</Wrapper>

			<Wrapper bgColor={color.grayScale[100]} src={mainSecond}>
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
							bgColor={color.grayScale[80]}
							size="fit"
							shape="slightly"
							style={{ marginRight: '10px' }}
						>
							인기 매물 보기
						</Button>
						<Button bgColor={color.grayScale[80]} size="fit" shape="slightly">
							믿을 수 있는 중고거래
						</Button>
					</div>
				</div>
			</Wrapper>

			<Wrapper bgColor={color.red[0]} src={mainThird} direction="row-reverse">
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
					<Button bgColor={color.grayScale[80]} size="fit" shape="slightly">
						우리 동네 이야기
					</Button>
				</div>
			</Wrapper>

			<Wrapper bgColor={color.grayScale[100]} src={mainFourth}>
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
					<Button bgColor={color.grayScale[80]} size="fit" shape="slightly">
						내근처 알바 보기
					</Button>
				</div>
			</Wrapper>

			<Wrapper bgColor={color.green[0]} src={mainLast} direction="row-reverse">
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
					<Button bgColor={color.grayScale[80]} size="fit" shape="slightly">
						당근 동네업체 보기
					</Button>
				</div>
			</Wrapper>
		</>
	)
}

export default MainPage

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
	font-size: ${fontSize.huge};
	line-height: 5.8rem;
	margin-bottom: 1rem;
`

const S = {
	Content,
	ContentTitle,
	Title,
}
