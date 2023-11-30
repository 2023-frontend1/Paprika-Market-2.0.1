import styled, { css } from 'styled-components'
import { flexAlign, fontSize, fontWeight } from '../../styles/themes/@index'

import ImageBox from '../image_box'

const ArticleBox = ({
	title = '⚠️ No Data',
	price = '⚠️ No Data',
	address = '⚠️ No Data',
	numInterest = '⚠️',
	numChat = '⚠️',
	imgSrc = 'logo.png',
}) => {
	return (
		<S.Div_Container>
			<ImageBox src={imgSrc} width="100%" style={{ aspectRatio: '1/1' }} />
			<S.Sec_TextSection>
				<P_TextTitle>{title}</P_TextTitle>
				<S.P_TextCost>{price} 원</S.P_TextCost>
				<S.P_TextAddress>{address}</S.P_TextAddress>
				<S.Sec_VotingResultSection>
					<S.Spa_TextVotingItem>관심 {numInterest}</S.Spa_TextVotingItem>
					<S.Spa_TextVotingItem> · </S.Spa_TextVotingItem>
					<S.Spa_TextVotingItem>채팅 {numChat}</S.Spa_TextVotingItem>
				</S.Sec_VotingResultSection>
			</S.Sec_TextSection>
		</S.Div_Container>
	)
}

export default ArticleBox

const textOverflowEclipseCss = css`
	margin: 0.5rem 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const Div_Container = styled.div`
	width: 22rem;
	height: 36rem;
	padding: 3px;
	cursor: pointer;

	${flexAlign.directionColumn}
	${flexAlign.alignCenter}
`
const Sec_TextSection = styled.div`
	width: 100%;
	height: 10rem;
	margin-top: 10px;
`

const P_TextTitle = styled.p`
	${textOverflowEclipseCss}
`

const P_TextCost = styled.p`
	${textOverflowEclipseCss}
	font-weight: ${fontWeight.bold};
`
const P_TextAddress = styled.p`
	${textOverflowEclipseCss}
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.regular};
`
const Sec_VotingResultSection = styled.section`
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.thin};
`
const Spa_TextVotingItem = styled.span`
	font-size: small;
	margin-right: 5px;
`

const S = {
	P_TextTitle,
	Div_Container,
	Sec_TextSection,
	P_TextCost,
	P_TextAddress,
	Sec_VotingResultSection,
	Spa_TextVotingItem,
}
