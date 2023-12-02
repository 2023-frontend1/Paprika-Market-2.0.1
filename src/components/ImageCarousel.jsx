import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import useAlarm from '../hooks/use_Alarm'
import flexAlign from '../styles/themes/flex_align'
import ImageBox from './image_box'

// 주의!!!
// width, height 속성에 % 단위를 사용하면, 원하는대로 동작되지 않습니다.
const ImageCarousel = ({
	width,
	height,
	cycle = 3,
	imgSrcs = ['logo.png', 'logo.png', 'logo.png'],
}) => {
	const { ring, timerStart } = useAlarm(cycle)
	const carouselRef = useRef(null)
	const curIdxRef = useRef(0)

	const elementsNum = imgSrcs.length

	useEffect(() => {
		timerStart()
		if (carouselRef.current !== null) {
			carouselRef.current.style.transform = `translateX(-${
				(curIdxRef.current * 100) / elementsNum
			}%)`

			curIdxRef.current = curIdxRef.current + 1
			curIdxRef.current %= elementsNum
		}
	}, [ring])

	return (
		<Div_Wrapper $width={width} $height={height}>
			<Ul_ChildrenList ref={carouselRef}>
				{imgSrcs.map((src, idx) => {
					return (
						<Li_ChildrenOne key={idx} $width={width}>
							<ImageBox src={src} width="100%" style={{ aspectRatio: '1/1' }} />
						</Li_ChildrenOne>
					)
				})}
			</Ul_ChildrenList>
		</Div_Wrapper>
	)
}

export default ImageCarousel

const Div_Wrapper = styled.div`
	width: ${({ $width }) => $width};
	height: ${($height) => $height};
	overflow: hidden;
`
const Ul_ChildrenList = styled.ul`
	${flexAlign.justifyStart}
	width: fit-content;
	height: 100%;

	transition: transform 1s ease;
`
const Li_ChildrenOne = styled.div`
	width: ${({ $width }) => $width};
	height: 100%;
	background-color: ${({ $bgColor }) => $bgColor};
`
