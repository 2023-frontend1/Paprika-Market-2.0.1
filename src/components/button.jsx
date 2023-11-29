import { css, styled } from 'styled-components'
import { color, flexAlign, fontSize, fontWeight } from '../styles/themes/@index'

const Button = ({	
	bgColor = color.orange[100],
	theme = 'default',
	border = 'default',
	size = 'default',
	shape = 'round',
	children,
	...rest
}) => {
	return (
		<S.But_PaprikaButton
			$bgColor={bgColor}
			$theme={theme}
			$color={color}
			$size={size}
			$shape={shape}
			$border={border}
			{...rest}
		>
			{children}
		</S.But_PaprikaButton>
	)
}
export default Button

const borderCss = {
	default: css`
		border: none;
	`,
	thin: css`
		border: 0.1rem solid ${color.grayScale[80]};
	`,
	thick: css`
		border: 0.15rem solid ${color.grayScale[80]};
	`,
}

const themeCss = {
	default: css`
		color: ${color.grayScale[0]};
	`,
	dark: css`
		color: ${color.grayScale[100]};
	`,
}

const sizeCss = {
	default: css`
		width: 16rem; //  root 태그에 설정된 폰트 사이지 대비 상대 크기
		height: 5rem;
	`,
	fit: css`
		width: fit-content; //  내부 요소 크기에 맞도록
		height: fit-content;
		padding: 1.2rem;
	`,
	full: css`
		width: 100%; // 부모 크기에 맞춤
		height: 100%;
	`,
}

const shapeCss = {
	default: css`
		border-radius: 4px;
	`,
	slightly: css`
		border-radius: 8px;
	`,
	round: css`
		border-radius: 10px;
	`,
}

const But_PaprikaButton = styled.button`
	background-color: ${({ $bgColor }) => $bgColor};
	${({ $theme }) => themeCss[$theme]}
	${({ $border }) => borderCss[$border]};

	${({ $size }) => sizeCss[$size]};
	${({ $shape }) => shapeCss[$shape]};

	font-weight: ${fontWeight.bold};
	font-size: ${fontSize.tiny};

	text-align: center;

	${flexAlign.flexCenter}

	padding: 1.2rem;
	cursor: pointer;
	/* display: inline-block; */
	&:hover {
		opacity: 0.7;
	}
`

const S = {
	But_PaprikaButton,
}
