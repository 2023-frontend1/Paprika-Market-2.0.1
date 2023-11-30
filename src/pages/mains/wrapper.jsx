import { styled } from 'styled-components'
import { color, flexAlign } from '../../styles/themes/@index'

const Wrapper = ({
	bgColor = color.orange[0],
	marginTop = '0',
	imgWidth = '65.5rem',
	imgHeight = '75rem',
	direction,
	children,
	...rest
}) => {
	return (
		<S.Div_MainSection $bgColor={bgColor}>
			<S.Div_MainWrapper
				$bgColor={bgColor}
				$marginTop={marginTop}
				$direction={direction}
				{...rest}
			>
				<S.Img_Mainimg
					$imgWidth={imgWidth}
					$imgHeight={imgHeight}
					{...rest}
				></S.Img_Mainimg>
				{children}
			</S.Div_MainWrapper>
		</S.Div_MainSection>
	)
}
export default Wrapper

const Div_MainSection = styled.div`
	width: 100vw;
	background-color: ${({ $bgColor }) => $bgColor};
`

const Div_MainWrapper = styled.div`
	width: 1024px;
	margin: 0px auto;
	${flexAlign.alignCenter}
	justify-content: space-between;
	background-color: ${({ $bgColor }) => $bgColor};
	margin-top: ${({ $marginTop }) => $marginTop};
	flex-direction: ${({ $direction }) => $direction};
`
const Img_Mainimg = styled.img`
	width: ${({ $imgWidth }) => $imgWidth};
	height: ${({ $imgHeight }) => $imgHeight};
`
const S = {
	Div_MainSection,
	Div_MainWrapper,
	Img_Mainimg,
}
