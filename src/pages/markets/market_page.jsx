import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { get12ProductSummeryByPage } from '../../apis/product_api'
import ArticleBox from '../../components/article_box'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../styles/themes/@index'
import changePrice from '../../utils/change_price'
import topSearchCatagory from './constant'
import MarKetImg from '/img_markets/market_img.webp'

const MarketPage = () => {
	/** 상품에 대한 요약 정보가 담긴 배열 */
	const [productSummaries, setProductSummaries] = useState([])
	/** 페이지 넘버를 기록 */
	const productSummariesPageNumber = useRef(1)
	const navigate = useNavigate()
	/** 상품에 대한 요약 정보가 담긴 배열을 호출하고 상태로 관리하는 함수 */
	const getNManageProductsSummariesByApi = async () => {
		const getDatas = await get12ProductSummeryByPage(
			productSummariesPageNumber.current
		)
		setProductSummaries((prev) => {
			const _prev = [...prev]
			_prev.push(...getDatas)
			return _prev
		})
	}
	/** 페이지 넘버 갱신 함수 */
	const onIncreasePageNumber = () => {
		productSummariesPageNumber.current += 1
		getNManageProductsSummariesByApi()
	}

	useEffect(() => {
		getNManageProductsSummariesByApi()
	}, [setProductSummaries])

	return (
		<S.Div_Center>
			<br></br>

			<S.Div_ImgSection>
				<S.Div_Box>
					<S.H1>
						믿을만한 <br />
						이웃 간 중고거래
					</S.H1>
					<S.Span>
						동네 주민들과 가깝고 따뜻한 거래를 <br />
						지금 경험해보세요.
					</S.Span>
					<S.Img_Market src={MarKetImg} />
				</S.Div_Box>
			</S.Div_ImgSection>

			<S.Div_ListSection>
				<S.H1_Title>중고거래 인기매물</S.H1_Title>

				{productSummaries.map((product, idx) => {
					return (
						<ArticleBox
							key={idx}
							title={product.productName}
							price={changePrice(product.productPrice)}
							address={product.userLocation}
							numInterest={product.interestCnt}
							numChat={product.chattingCnt}
							imgSrcs={product.srcs}
							onClick={() => {
								navigate(`/product/${product.productId}`)
							}}
						/>
					)
				})}
			</S.Div_ListSection>
			<S.Div_Link onClick={onIncreasePageNumber}>인기매물 더보기</S.Div_Link>

			<S.Div_KeyWordSection>
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
			</S.Div_KeyWordSection>
		</S.Div_Center>
	)
}

export default MarketPage

const Div_Center = styled.div`
	margin-top: 64px;
`
const Div_ImgSection = styled.div`
	${flexAlign.flexCenter};
	width: 100vw;
	background-color: ${color.orange[0]};
	height: 31.6rem;
`
const Div_Box = styled.div`
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
const Div_ListSection = styled.div`
	${flexAlign.justifyBetween}
	flex-wrap: wrap;
	width: 100%;
	margin: 0 auto;
	padding-top: 6.4rem;
	width: 76rem;
	gap: 2.4rem;
`
const H1_Title = styled.h1`
	text-align: center;
	line-height: 4.4rem;
	width: 100%;
`
const Div_Link = styled.div`
	cursor: pointer;
	text-decoration: underline;
	margin: 4rem;
	font-weight: ${fontWeight.bold};
	${flexAlign.flexCenter};
`
const Div_KeyWordSection = styled.div`
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
const Img_Market = styled.img`
	width: 41.6rem;
	position: absolute;
	top: 0px;
	right: 0px;
`

const S = {
	Div_Center,
	Div_ImgSection,
	Div_Box,
	H1,
	Span,
	Div_ListSection,
	Div_Link,
	Div_KeyWordSection,
	Ul,
	Li,
	H3,
	Img_Market,
	H1_Title,
}
