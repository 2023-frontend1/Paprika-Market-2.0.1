import { css, styled } from 'styled-components'

const ImageBox = ({ shape = 'default', width, height, ...rest }) => {
	return (
		<S.Img_ImgBox $shape={shape} $width={width} $height={height} {...rest} />
	)
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

const Img_ImgBox = styled.img`
	${({ $shape }) => shapeCss[$shape]}
	width: ${($width) => $width};
	height: ${($height) => $height};
`

const S = {
	Img_ImgBox,
}
