import styled from 'styled-components'
import flexAlign from '../styles/themes/flex_align'

const CenterBox = ({ children }) => {
	return (
		<S.Div_Wrapper>
			<S.Div_CenterAlign>{children}</S.Div_CenterAlign>
		</S.Div_Wrapper>
	)
}

export default CenterBox

const Div_Wrapper = styled.div`
	width: 100%;
	display: flex;
	${flexAlign.justifyCenter}
`
const Div_CenterAlign = styled.div`
	max-width: 45%;
`

const S = {
	Div_Wrapper,
	Div_CenterAlign,
}
