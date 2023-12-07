import styled from 'styled-components'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../../styles/themes/@index'
import ProfileBadge from '../../../components/profile_badge'
const InfoReviews = () => {
	return (
		<S.ReviewList>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ProfileBadge />
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>리뷰가 들어갈 자리입니다.</S.Content>
			</S.ReviewOne>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ProfileBadge />
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>리뷰가 들어갈 자리입니다.</S.Content>
			</S.ReviewOne>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ProfileBadge />
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>리뷰가 들어갈 자리입니다.</S.Content>
			</S.ReviewOne>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ProfileBadge />
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>리뷰가 들어갈 자리입니다.</S.Content>
			</S.ReviewOne>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ProfileBadge />
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>리뷰가 들어갈 자리입니다.</S.Content>
			</S.ReviewOne>
		</S.ReviewList>
	)
}

export default InfoReviews

const ReviewList = styled.ul`
	${flexAlign.directionColumn}
	width: 100%;
	justify-content: start;
	align-items: start;
	gap: 20px;
`

const ReviewOne = styled.li`
	${flexAlign.directionColumn}
	width: 100%;
	margin-bottom: 15px;
	padding-bottom: 25px;
	justify-content: center;
	align-items: start;
	gap: 8px;
	border-bottom: 0.1px solid ${color.grayScale[60]};
`

const ProfileBlock = styled.div`
	padding: 0;
	display: flex;
	justify-content: start;
	align-items: center;
	text-align: center;
	gap: 15px;
`

const NickName = styled.span`
	font-size: ${fontSize.small};
`
const Address = styled.span`
	margin-left: 10px;
	font-size: ${fontSize};
	font-weight: ${fontWeight.thin};
`

const Content = styled.p`
	margin: 0;
	padding: 0;
	font-size: ${fontSize.tiny};
`

const S = { ReviewList, ReviewOne, NickName, Address, Content, ProfileBlock }
