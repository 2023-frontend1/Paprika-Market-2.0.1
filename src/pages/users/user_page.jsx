import { CenterBox, ProfileBadge } from '../../components/@index'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../styles/themes/@index'
import { styled, css } from 'styled-components'
import { InfoProducts, InfoRates, InfoReviews } from './components/@index'
import { useParams, useSearchParams } from 'react-router-dom'
import { getUserInfoById } from '../../apis/user_api'
import { useEffect, useState } from 'react'

const UserPage = () => {
	const { userId } = useParams()
	const [userSummaries, setUserSummaries] = useState({})

	const getUserSummaries = async (id) => {
		const userData = await getUserInfoById(id)
		setUserSummaries(userData)
	}
	useEffect(() => {
		getUserSummaries(userId)
	}, [setUserSummaries])
	const [queryParam, setQueryParam] = useSearchParams()
	const changeParam = (value) => {
		if (!value) {
			queryParam.delete('kind')
		} else {
			queryParam.set('kind', value)
		}
		setQueryParam(queryParam)
	}
	const Subcomponents = {
		reviews: <InfoReviews usersum={userSummaries} />,
		manners: <InfoRates usersum={userSummaries} />,
	}
	return (
		<CenterBox>
			<S.Div_UserProfileSection>
				<ProfileBadge size="7rem" name={userSummaries.userNickname} />
				<S.Div_UserInfoTextsArea>
					<S.H2_UserSignificantInfoText>
						{userSummaries.userNickname}
						<S.Span_UserAddress>
							{userSummaries.userLocation}
						</S.Span_UserAddress>
					</S.H2_UserSignificantInfoText>
					<S.Ul_UserEvaluationInfoTexts>
						<S.Li_InfoText>
							매너온도 {userSummaries.mannerTemperature}{' '}
						</S.Li_InfoText>
					</S.Ul_UserEvaluationInfoTexts>
				</S.Div_UserInfoTextsArea>
			</S.Div_UserProfileSection>

			<S.Sec_UserFilterSection>
				<S.Ul_UserFilterList>
					<S.Li_EvaluationItem
						$isClicked={!queryParam.get('kind')}
						onClick={() => {
							changeParam('')
						}}
					>
						{`판매 물품 (
                        ${
													userSummaries.products &&
													userSummaries.products.length
												} )`}
					</S.Li_EvaluationItem>
					<S.Li_EvaluationItem
						$isClicked={queryParam.get('kind') === 'reviews'}
						onClick={() => {
							changeParam('reviews')
						}}
					>
						{`거래 후기 (
                        ${
													userSummaries.reviews && userSummaries.reviews.length
												} )`}
					</S.Li_EvaluationItem>
					<S.Li_EvaluationItem
						$isClicked={queryParam.get('kind') === 'manners'}
						onClick={() => {
							changeParam('manners')
						}}
					>
						매너 칭찬
					</S.Li_EvaluationItem>
				</S.Ul_UserFilterList>
			</S.Sec_UserFilterSection>

			{Subcomponents[queryParam.get('kind')] ? (
				Subcomponents[queryParam.get('kind')]
			) : (
				<InfoProducts usersum={userSummaries} />
			)}
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
	color: ${({ $isClicked }) =>
		$isClicked ? color.orange[100] : color.grayScale[60]};
	font-weight: ${({ $isClicked }) =>
		$isClicked ? fontWeight.bold : fontWeight.thin};
	&:hover {
		color: ${color.orange[100]};
	}
	position: relative;
	display: inline-block;

	${({ $isClicked }) =>
		$isClicked &&
		css`
			&:before {
				content: '';
				position: absolute;
				width: 100%;
				height: 3px;
				bottom: -17px;
				left: 0;
				background: ${color.orange[100]};
			}
		`};
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
