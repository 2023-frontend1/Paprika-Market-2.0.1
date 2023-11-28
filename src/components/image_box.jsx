import { css, styled } from 'styled-components'

const ImageBox = ({ shape = 'default', ...rest }) => {
	return <S.Img_ImgBox $shape={shape} {...rest} />
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
`

const S = {
	Img_ImgBox,
}
