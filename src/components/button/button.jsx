import { css, styled } from 'styled-components'
import { color, fontSize, fontWeight } from '../../styles/themes/@index'

const Button = ({
	color = 'primary',
	size = 'large',
	shape = 'round',
	border = 'default',
	children,
	...rest
}) => {
	return (
		<S $color={color} $size={size} $shape={shape} $border={border} {...rest}>
			{children}
		</S>
	)
}
export default Button

const borderStyle = {
	default: css``,
	orange: css`
		border: 1px solid ${color.orange[50]};
	`,
	green: css`
		border: 1px solid ${color.green[50]};
	`,
	red: css`
		border: 1px solid ${color.red[50]};
	`,
	gray: css`
		border: 1px solid ${color.grayScale[80]};
	`,
}

const buttonColor = {
	primary: css`
		background-color: ${color.orange[100]};
		color: white;
	`,
	white: css`
		background-color: ${color.grayScale[100]};
	`,
	gray: css`
		background-color: ${color.grayScale[80]};
	`,
}

const sizeCss = {
	default: css`
		width: auto;
		padding: 1.2rem 1.6rem;
	`,

	large: css`
		width: auto;
		padding: 1.6rem 3.2rem;
	`,
}

const shapeCss = {
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
	${({ $color }) => buttonColor[$color]};
	${({ $size }) => sizeCss[$size]};
	${({ $shape }) => shapeCss[$shape]};
	${({ $border }) => borderStyle[$border]};
	font-weight: ${fontWeight.bold};
	font-size: ${fontSize.tiny};
	cursor: pointer;
	display: inline-block;
	&:hover {
		opacity: 0.7;
	}
`
