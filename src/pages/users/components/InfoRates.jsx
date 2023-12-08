import styled from 'styled-components'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../../styles/themes/@index'

const MannerComment = [
	'친절하고 매너가 좋아요.',
	' 시간 약속을 잘 지켜요.',
	' 응답이 빨라요.',
	' 제가 있는 곳까지 와서 거래했어요.',
	' 물품상태가 설명한 것과 같아요.',
	'좋은 물품을 저렴하게 판매해요.',
	' 물품설명이 자세해요.',
	' 나눔을 해주셨어요.',
]

const InfoRates = ({ usersum }) => {
	return (
		<S.RateSection>
			<S.Ul>
				{MannerComment.map((val, idx) => {
					return (
						<S.Li key={idx}>
							<S.P>
								{idx + 1}. {val}
							</S.P>
							<S.P>{usersum.mannerRate && usersum.mannerRate[idx]} 명</S.P>
						</S.Li>
					)
				})}
			</S.Ul>
		</S.RateSection>
	)
}
export default InfoRates

const RateSection = styled.section`
	width: 100%;
	padding-bottom: 30px;
	margin: 0;
	padding: 0;
`
const Ul = styled.ul`
	width: 100%;
	padding-inline-start: 0;
`
const Li = styled.li`
	background-color: ${color.grayScale[100]};
	counter-increment: item;
	position: relative;
	border-bottom: 0.1rem solid ${color.grayScale[40]};
	width: 100%;
	${flexAlign.alignStart}
	${flexAlign.justifyBetween}
	padding: 1.2rem 0;
`

const P = styled.p`
	display: inline-block;
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.regular};
`
const S = {
	RateSection,
	Ul,
	Li,
	P,
}
