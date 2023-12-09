import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getProductDetailById } from '../../apis/product_api'
import { CenterBox, ImageCarousel, ProfileBadge } from '../../components/@index'
import { flexAlign, fontSize, fontWeight } from '../../styles/themes/@index'
import changePrice from '../../utils/change_price'

const ProductPage = () => {
	/** PathVariable 값 */
	const { productId } = useParams()
	const navigate = useNavigate()
	/** 상품 정보가 담긴 객체를 상태로 관리 */
	const [productDetail, setProductDetail] = useState({})
	/** 상품 정보가 담긴 객체를 호출하고, 상태로 등록하는 함수 */
	const getNManageProductDetailByApi = async () => {
		const getData = await getProductDetailById(productId)
		console.log(changePrice(100000000))
		setProductDetail(getData)
	}
	useEffect(() => {
		getNManageProductDetailByApi()
	}, [setProductDetail])

	return (
		<CenterBox>
			<S.Div_ImageWrap>
				<S.But_LeftBtn />
				<ImageCarousel width="44rem" imgSrcs={productDetail.srcs} />
				<S.But_RightBtn />
			</S.Div_ImageWrap>

			<S.A_ProfileLink>
				<S.Div_LeftProfileWrap>
					<ProfileBadge />
					<S.Div_InfoWrap>
						<S.Div_NickName
							onClick={() => {
								navigate(`/user/${productDetail.userId}`)
							}}
						>
							{productDetail.userNickname}
						</S.Div_NickName>
						<S.Div_Location>{productDetail.userLocation}</S.Div_Location>
					</S.Div_InfoWrap>
				</S.Div_LeftProfileWrap>
				<S.Div_RightProfileWrap>
					<S.Dl_TampWrap>
						<S.Dt_TampText>매너온도</S.Dt_TampText>
						<S.Dd_TampTamp>
							{productDetail.mannerTemperature}
							<S.Spa_TampSpan>°C</S.Spa_TampSpan>
						</S.Dd_TampTamp>
						<S.Div_TampBox>
							<S.Div_TampBar />
						</S.Div_TampBox>
						<S.Div_TampFace />
					</S.Dl_TampWrap>
				</S.Div_RightProfileWrap>
			</S.A_ProfileLink>
			<S.Sec_DescriptWrap>
				<S.H1_DescriptTitle>{productDetail.productName}</S.H1_DescriptTitle>
				<S.P_DescriptCategory>카테고리 5일전</S.P_DescriptCategory>
				<S.P_DescriptPrice>
					{changePrice(productDetail.productPrice)} 원
				</S.P_DescriptPrice>
				<S.P_DescriptContent>{productDetail.productDetail}</S.P_DescriptContent>
				<S.P_DescriptCount>
					관심 {productDetail.interestCnt} ∙ 채팅 {productDetail.chattingCnt}
				</S.P_DescriptCount>
			</S.Sec_DescriptWrap>
		</CenterBox>
	)
}

export default ProductPage

const But_LeftBtn = styled.button`
	padding: 0px;
	position: absolute;
	left: -20px;
	top: 240px;
	border: none;
	z-index: 99;
	background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-left-4c0e713bfa2cd12bd959e6dd9ef456cd6fc094953c41e605f6b9a59bc1680686.svg)
		no-repeat;
	outline: none;
	width: 11px;
	height: 21px;
	text-indent: -9999px;
`
const But_RightBtn = styled.button`
	padding: 0px;
	width: 11px;
	height: 21px;
	position: absolute;
	right: -20px;
	top: 240px;
	border: none;
	background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-right-134c53f44716c3bef227ec30da385b4b09c9c068d339a617a23093718f379d02.svg)
		no-repeat;
`
const Div_ImageWrap = styled.div`
	position: relative;
	margin-top: 8rem;
	height: 500px;
	width: 100%;
	${flexAlign.flexCenter}
`
const A_ProfileLink = styled.a`
	width: 100%;
	text-decoration: none;
	display: block;
	margin-top: 3rem;
	padding-bottom: 2rem;
	position: relative;
	border-bottom: 1px solid #e9ecef;
`
const Div_LeftProfileWrap = styled.div`
	${flexAlign.alignCenter}
	&:hover {
		cursor: pointer;
	}
`
const Div_InfoWrap = styled.div`
	margin-left: 5px;
`
const Div_NickName = styled.div`
	font-size: ${fontSize.medium};
	font-weight: ${fontWeight.bold};
	line-height: 1.5;
	letter-spacing: -0.6px;
	color: #212529;
	&:hover {
		text-decoration-line: underline;
	}
`
const Div_Location = styled.div`
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.regular};
	line-height: 1.46;
	letter-spacing: -0.6px;
	color: #212529;
`
const Div_RightProfileWrap = styled.div`
	position: absolute;
	right: 0;
	padding-right: 3.4rem;
`
const Dl_TampWrap = styled.dl`
	display: block;
	width: 100px;
`
const Dt_TampText = styled.dt`
	position: absolute;
	top: 0px;
	right: 0px;
	font-size: 12px;
	line-height: 1;
	letter-spacing: -0.6px;
	color: #868e96;
`
const Dd_TampTamp = styled.dd`
	color: #1561a9;
	position: absolute;
	font-size: 16px;
	font-weight: bold;
	line-height: 1;
	letter-spacing: -0.5px;
	margin-top: 1px;
	width: 100px;
	text-align: right;
	top: -30px;
	right: 30px;
`
const Div_TampFace = styled.div`
	background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set@2x-0bece009c619b4706f52a750aca82448334aa3e39d353579f2ce9c365639a03b.png)
		no-repeat;
	background-size: 29px 147px;
	background-position: 0px -75px;
	width: 24px;
	height: 24px;
	position: absolute;
	top: -31px;
	right: -5px;
`
const Spa_TampSpan = styled.span``
const Div_TampBox = styled.div`
	clear: both;
	display: block;
	width: 10.8rem;
	background-color: #e9ecef;
	height: 4px;
	border-radius: 100px;
	position: relative;
	margin-top: 24px;
	top: -30px;
`
const Div_TampBar = styled.div`
	width: 38%;
	background-color: #1561a9;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	height: 4px;
`
const Sec_DescriptWrap = styled.section`
	width: 100%;
	margin-bottom: 3rem;
`
const H1_DescriptTitle = styled.h1`
	font-size: 20px;
	font-weight: ${fontWeight.bold};
	line-height: 1.5;
	letter-spacing: -0.6px;
	margin: 0px;
	padding-top: 4rem;
`
const P_DescriptCategory = styled.p`
	margin-top: 1rem;
	font-size: ${fontSize.tiny};
	line-height: 1.46;
	letter-spacing: -0.6px;
	color: #868e96;
`
const P_DescriptPrice = styled.p`
	margin-top: 1rem;
	line-height: 1.76;
	letter-spacing: -0.6px;
	font-size: ${fontSize.small};
	font-weight: 600;
`
const P_DescriptContent = styled.p`
	font-size: ${fontSize.small};
	line-height: 1.6;
	letter-spacing: -0.6px;
	margin: 3rem 0;
	word-break: break-all;
`
const P_DescriptCount = styled.p`
	font-size: ${fontSize.tiny};
	line-height: 1.46;
	letter-spacing: -0.6px;
	color: #868e96;
`
const S = {
	But_LeftBtn,
	But_RightBtn,
	Div_ImageWrap,
	A_ProfileLink,
	Div_LeftProfileWrap,
	Div_InfoWrap,
	Div_NickName,
	Div_Location,
	Div_RightProfileWrap,
	Dl_TampWrap,
	Dt_TampText,
	Dd_TampTamp,
	Spa_TampSpan,
	Div_TampFace,
	Div_TampBox,
	Div_TampBar,
	Sec_DescriptWrap,
	H1_DescriptTitle,
	P_DescriptCategory,
	P_DescriptPrice,
	P_DescriptContent,
	P_DescriptCount,
}
