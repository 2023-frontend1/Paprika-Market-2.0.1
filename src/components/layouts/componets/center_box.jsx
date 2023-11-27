import styled from 'styled-components'
import { flexAlign } from '../../../styles/themes/@index'
const CenterBox = ({ children }) => {
	return (
		<S.Div_Wrapper>
			<S.Div_AlignCenter>{children}</S.Div_AlignCenter>
		</S.Div_Wrapper>
	)
}

export default CenterBox
const Div_Wrapper = styled.div`
	width: 100%;
	${flexAlign.justifyCenter}
`
const Div_AlignCenter = styled.div`
	max-width: 50%;
`
const S = {
	Div_AlignCenter,
	Div_Wrapper,
}
