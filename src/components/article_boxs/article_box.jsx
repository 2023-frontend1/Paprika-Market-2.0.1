import styled, { css } from 'styled-components'
import flexAlign from '../../styles/themes/flex_align'
import fontSize from '../../styles/themes/font_size'
import fontWeight from '../../styles/themes/font_weight'

const ArticleBox = ({
	title = '제목',
	price = '가격',
	address = '주소',
	numInterest = '312',
	numChat = '123',
}) => {
	return (
		<S.Div_Container>
			<S.Div_TmpImg />
			<S.Sec_TextSection>
				<P_TextTitle>{title}</P_TextTitle>
				<S.P_TextCost>{price}</S.P_TextCost>
				<S.P_TextAddress>{address}</S.P_TextAddress>
				<S.Sec_VotingResultSection>
					<S.Spa_TextVotingItem>관심 {numInterest}</S.Spa_TextVotingItem>
					<S.Spa_TextVotingItem>·</S.Spa_TextVotingItem>
					<S.Spa_TextVotingItem>채팅 {numChat}</S.Spa_TextVotingItem>
				</S.Sec_VotingResultSection>
			</S.Sec_TextSection>
		</S.Div_Container>
	)
}

export default ArticleBox

const TextOverflowEclipseCss = css`
	margin: 0.5rem 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const Div_Container = styled.div`
	width: 22rem;
	height: 36rem;
	padding: 3px;

	${flexAlign.directionColumn}
	${flexAlign.alignCenter}
`
const Div_TmpImg = styled.div`
	width: 100%;
	aspect-ratio: 1/1;
	background-color: green;
`
const Sec_TextSection = styled.div`
	width: 100%;
	height: 10rem;
	margin-top: 10px;
`

const P_TextTitle = styled.p`
	${TextOverflowEclipseCss}
`

const P_TextCost = styled.p`
	${TextOverflowEclipseCss}
	font-weight: ${fontWeight.bold};
`
const P_TextAddress = styled.p`
	${TextOverflowEclipseCss}
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
	Div_TmpImg,
	P_TextCost,
	P_TextAddress,
	Sec_VotingResultSection,
	Spa_TextVotingItem,
}
