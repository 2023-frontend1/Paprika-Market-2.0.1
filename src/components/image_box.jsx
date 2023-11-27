import { css, styled } from 'styled-components'

const ImageBox = ({ shape, size, ...rest }) => {
	return <S.Img_ImgBox $shape={shape} $size={size} {...rest} />
}

export default ImageBox

const shapeCss = {
	rectangle: css`
		border-radius: 8px;
	`,
	round: css`
		border-radius: 50%;
	`,
}
const sizeCss = {
	tiny: css`
		width: 24px;
		height: 24px;
	`,
	small: css`
		width: 40px;
		height: 40px;
	`,
	medium: css`
		width: 58px;
		height: 58px;
	`,
	large: css`
		width: 207px;
		height: 207px;
	`,
	big: css`
		width: 677px;
		height: 500px;
	`,
}

const Img_ImgBox = styled.img`
	${({ $shape }) => shapeCss[$shape]}
	${({ $size }) => sizeCss[$size]}
`

const S = {
	Img_ImgBox,
}
