import { CenterBox, ProfileBadge } from '../../components/@index'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../styles/themes/@index'
import styled from 'styled-components'
import { InfoProducts, InfoRates, InfoReviews } from './components/@index'

const UserPage = () => {
	return (
		<CenterBox>
			<S.Div_UserProfileSection>
				<ProfileBadge size="7rem" />
				<S.Div_UserInfoTextsArea>
					<S.H2_UserSignificantInfoText>
						UserNickName
						<S.Span_UserAddress>UserLocation ex 00시00구</S.Span_UserAddress>
					</S.H2_UserSignificantInfoText>
					<S.Ul_UserEvaluationInfoTexts>
						<S.Li_InfoText>매너온도 36.5 재거래희망률 100%</S.Li_InfoText>
					</S.Ul_UserEvaluationInfoTexts>
				</S.Div_UserInfoTextsArea>
			</S.Div_UserProfileSection>

			<S.Sec_UserFilterSection>
				<S.Ul_UserFilterList>
					<S.Li_EvaluationItem>판매 물풀 (1)</S.Li_EvaluationItem>
					<S.Li_EvaluationItem>거래 후기 (1)</S.Li_EvaluationItem>
					<S.Li_EvaluationItem>매너 칭찬</S.Li_EvaluationItem>
				</S.Ul_UserFilterList>
			</S.Sec_UserFilterSection>

			<InfoProducts />
			<InfoRates />
			<InfoReviews />
		</CenterBox>
	)
}

export default UserPage

const Div_UserProfileSection = styled.div`
	${flexAlign.alignCenter}
	gap: 15px;
	margin-top: 70px;
	width: 100%;
`

const Div_UserInfoTextsArea = styled.div`
	${flexAlign.directionColumn}
	width: 80%;
	margin: 0%;
	justify-content: start;
`
const Li_InfoText = styled.li`
	font-size: ${fontSize.tiny};
`
const H2_UserSignificantInfoText = styled.h2`
	margin: 0%;
	padding: 0px 0px 0px 0px;
	font-size: ${fontSize.medium};
	font-weight: ${fontWeight.bold};
`
const Ul_UserEvaluationInfoTexts = styled.ul`
	margin: 0%;
	padding: 0%;
	display: flex;
	justify-content: start;
	width: 100%;
	gap: 10px;
	font-size: ${fontSize.small};
	color: ${color.grayScale[60]};
	padding: 10px;
`

const Li_EvaluationItem = styled.li`
	color: ${color.grayScale[60]};
`

const Sec_UserFilterSection = styled.section`
	margin-top: 20px;
	margin-bottom: 20px;
	width: 100%;
`

const Ul_UserFilterList = styled.ul`
	border-bottom: 1px solid #e9ecef;
	padding-bottom: 10px;
	padding: 0;
	${flexAlign.flexStart}
	gap: 20px;
	padding: 0 0 15px 20px;
	font-size: ${fontSize.small};
	color: ${color.grayScale[60]};
`

const Span_UserAddress = styled.span`
	margin-left: 10px;
	font-size: ${fontSize.small};
	font-weight: ${fontWeight.thin};
`

const Sec_CardListSection = styled.section`
	${flexAlign.flexCenter}
	${flexAlign.justifyBetween}
	flex-wrap: wrap;
	gap: 10px;
	width: 100%;
`

const S = {
	Div_UserProfileSection,
	Div_UserInfoTextsArea,
	Li_InfoText,
	H2_UserSignificantInfoText,
	Ul_UserEvaluationInfoTexts,
	Li_EvaluationItem,
	Sec_UserFilterSection,
	Ul_UserFilterList,
	Span_UserAddress,
	Sec_CardListSection,
}
