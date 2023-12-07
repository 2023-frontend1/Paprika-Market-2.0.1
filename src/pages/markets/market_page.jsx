import { useNavigate } from 'react-router'
import styled from 'styled-components'
import ArticleBox from '../../components/article_box'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../styles/themes/@index'
import topSearchCatagory from './top_category'
import MarKetImg from '/img_markets/market_img.webp'

const MarketPage = () => {
	const navigate = useNavigate()
	const OnCategoryClick = (path) => {
		navigate(path)
	}

	return (
		<S.Center>
			<br></br>

			<S.ImgSection>
				<S.Box>
					<S.H1>
						믿을만한 <br />
						이웃 간 중고거래
					</S.H1>
					<S.Span>
						동네 주민들과 가깝고 따뜻한 거래를 <br />
						지금 경험해보세요.
					</S.Span>
					<S.MarketImg src={MarKetImg} />
				</S.Box>
			</S.ImgSection>

			<S.ListSection>
				<S.Title>중고거래 인기매물</S.Title>
				<ArticleBox />
				<ArticleBox />
				<ArticleBox />
				<ArticleBox />
				<ArticleBox />
				<ArticleBox />
				<ArticleBox />
				<ArticleBox />
				<ArticleBox />
			</S.ListSection>
			<S.link
				onClick={() => {
					alert('ddd')
				}}
			>
				인기매물 더보기
			</S.link>

			<S.KeyWordSection>
				<S.H3
					onClick={() => {
						OnCategoryClick('/topKeywords')
					}}
				>
					중고거래 인기검색어
				</S.H3>

				<S.Ul>
					{topSearchCatagory.map((item, idx) => (
						<S.Li
							key={idx}
							onClick={() => {
								OnCategoryClick(`${info.url}`)
							}}
						>
							{item.text}
						</S.Li>
					))}
				</S.Ul>
			</S.KeyWordSection>
		</S.Center>
	)
}

export default MarketPage

const Center = styled.div`
	margin-top: 64px;
`
const ImgSection = styled.div`
	${flexAlign.flexCenter};
	width: 100vw;
	background-color: ${color.orange[0]};
	height: 31.6rem;
`
const Box = styled.div`
	position: relative;
	height: 100%;
	box-sizing: border-box;
	padding-top: 6rem;
	margin: 0 auto;
`
const H1 = styled.h1`
	line-height: 5rem;
	font-size: ${fontSize.big};
	width: 76.8rem;
`
const Span = styled.span`
	line-height: 2.4rem;
	margin-top: 1.6rem;
	display: block;
`
const ListSection = styled.div`
	${flexAlign.justifyBetween}
	flex-wrap: wrap;
	width: 100%;
	margin: 0 auto;
	padding-top: 6.4rem;
	width: 76rem;
	gap: 2.4rem;
`
const Title = styled.h1`
	text-align: center;
	line-height: 4.4rem;
	width: 100%;
`
const link = styled.div`
	cursor: pointer;
	text-decoration: underline;
	margin: 4rem;
	font-weight: ${fontWeight.bold};
	${flexAlign.flexCenter};
`
const KeyWordSection = styled.div`
	${flexAlign.flexCenter};
	flex-direction: row;
	background-color: ${color.grayScale[80]};
	width: 100%;
	height: 10.4rem;
`

const H3 = styled.h3`
	cursor: pointer;
	text-decoration: underline;
	font-size: ${fontSize.small};
	margin-right: 4.8rem;
`
const Li = styled.li`
	cursor: pointer;
	margin: 1rem;
	font-weight: ${fontWeight.thin};
`

const Ul = styled.ul`
	display: flex;
	flex-direction: row;
`
const MarketImg = styled.img`
	width: 41.6rem;
	position: absolute;
	top: 0px;
	right: 0px;
`

const S = {
	Center,
	ImgSection,
	Box,
	H1,
	Span,
	ListSection,
	link,
	KeyWordSection,
	Ul,
	Li,
	H3,
	MarketImg,
	Title,
}
