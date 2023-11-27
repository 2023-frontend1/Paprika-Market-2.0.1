import { css, styled } from 'styled-components'

const ImageBox = ({ shape = 'default', size = 'medium', ...rest }) => {
	return <S.Img_ImgBox $shape={shape} $size={size} {...rest} />
}

export default ImageBox

const shapeCss = {
	default: css`
		border-radius: 1rem;
	`,
	round: css`
		border-radius: 100rem;
	`,
}
const sizeCss = {
	tiny: css`
		width: 2.45rem;
		height: 2.45rem;
	`,
	small: css`
		width: 4rem;
		height: 4rem;
	`,
	medium: css`
		width: 5.8rem;
		height: 5.8rem;
	`,
	large: css`
		width: 20.7rem;
		height: 20.7rem;
	`,
	big: css`
		width: 67.8rem;
		height: 50rem;
	`,
}

const Img_ImgBox = styled.img`
	${({ $shape }) => shapeCss[$shape]}
	${({ $size }) => sizeCss[$size]}
`

const S = {
	Img_ImgBox,
}
