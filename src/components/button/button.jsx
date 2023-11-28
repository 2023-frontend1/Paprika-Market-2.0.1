import { css, styled } from 'styled-components'
import { color, fontSize, fontWeight } from '../../styles/themes/@index'

const Button = ({ variant, size, shape, children, ...rest }) => {
	return (
		<S $variant={variant} $size={size} $shape={shape} {...rest}>
			{children}
		</S>
	)
}
export default Button

const variant = {
	primary: css`
		background-color: ${color.orange[100]};
		color: white;
		&:hover {
			background-color: ${color.orange[50]};
		}
	`,
	white: css`
		border: 1px solid ${color.grayScale[80]};
		background-color: ${color.grayScale[100]};
		&:hover {
			background-color: ${color.grayScale[80]};
		}
	`,
	gray: css`
		background-color: ${color.grayScale[80]};
		&:hover {
			opacity: 0.7;
		}
	`,
}

const size = {
	small: css`
		width: 84px;
		padding: 1.2rem;
	`,

	medium: css`
		width: 140px;
		padding: 1rem 0px;
	`,

	large: css`
		width: 160px;
		height: 52px;
	`,
}

const shape = {
	little: css`
		border-radius: 4px;
	`,
	normal: css`
		border-radius: 8px;
	`,
	round: css`
		border-radius: 10px;
	`,
}

const S = styled.button`
	${({ $variant }) => variant[$variant]};
	${({ $size }) => size[$size]};
	${({ $shape }) => shape[$shape]};
	font-weight: ${fontWeight.bold};
	font-size: ${fontSize.tiny};
	cursor: pointer;
`
