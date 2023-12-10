import styled from 'styled-components'
import { color, fontSize, fontWeight } from '../../../styles/themes/@index'
import { useState } from 'react'

const SideBar = () => {
	const [isOpen, setIsOpen] = useState(true)

	const onClickZzimBtn = () => {
		setIsOpen((prev) => !prev)
	}
	return (
		<S.Div_AbsoluteWrap $isOpen={isOpen}>
			<S.Div_SideWrap>
				<S.But_OnOffButton onClick={onClickZzimBtn}>
					{isOpen ? '열기' : '닫기'}
				</S.But_OnOffButton>
				<S.H1_ZzimWrap>찜하기 </S.H1_ZzimWrap>
			</S.Div_SideWrap>
		</S.Div_AbsoluteWrap>
	)
}
export default SideBar
const Div_AbsoluteWrap = styled.div`
	position: fixed;
	right: 0px;
	top: 8.7rem;
	width: ${({ $isOpen }) => ($isOpen ? '3%' : '25%')};
	transition: 0.5s linear;
`
const Div_SideWrap = styled.div`
	background-color: ${color.grayScale[80]};
	position: sticky;
	top: 68px;
	height: calc(100vh - 72px);
	opacity: 70%;
`
const H1_ZzimWrap = styled.h1`
	font-size: ${fontSize.big};
	font-weight: ${fontWeight.bold};
	text-align: center;
	border-bottom: 0.1px solid ${color.grayScale[20]};
`
const But_OnOffButton = styled.button`
	background-color: ${color.orange[50]};
	border-radius: 8px;
	margin-left: 2rem;
	margin-top: 2rem;
	font-size: ${fontSize.small};
	font-weight: ${fontWeight.bold};
	&:hover {
		background-color: ${color.orange[100]};
	}
`

const S = {
	Div_AbsoluteWrap,
	Div_SideWrap,
	H1_ZzimWrap,
	But_OnOffButton,
}
