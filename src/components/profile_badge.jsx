import styled from 'styled-components'
import { color, flexAlign, fontSize } from '../styles/themes/@index'

const ProfileBadge = ({ name = '★', size = '38px' }) => {
	return (
		<S.Div_Wrapper $size={size}>
			<S.P_TextFirstCharacter>{name.substring(0, 2)}</S.P_TextFirstCharacter>
		</S.Div_Wrapper>
	)
}

export default ProfileBadge

const Div_Wrapper = styled.div`
	/* 컴포넌트 크기 */
	width: ${({ $size }) => $size};
	min-width: 38px;
	max-width: 100px;
	aspect-ratio: 1/1;

	/* 색상 */
	background-color: ${color.orange[100]};

	/* 경계선 */
	border-radius: 100%;

	/* 레이아웃 정렬 */
	${flexAlign.flexCenter}
`

const P_TextFirstCharacter = styled.p`
	/* 색상 */
	color: ${color.grayScale[100]};

	/* 텍스트 정렬 */
	text-align: center;

	/* 폰트 크기 */
	font-size: ${fontSize.medium};
`

const S = {
	Div_Wrapper,
	P_TextFirstCharacter,
}
