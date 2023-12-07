import styled from 'styled-components'
import { flexAlign } from '../../../styles/themes/@index'
import ArticleBox from '../../../components/article_boxs/article_box'
const InfoProducts = () => {
	return (
		<>
			<S.Sec_CardListSection>
				<ArticleBox
					title={'가방'}
					price={'10,000'}
					address={'서울시'}
					numInterest={10}
					numChat={30}
					imgSrc={'https://source.unsplash.com/user/USERNAME'}
					style={{ width: '20rem' }}
					onClick={() => {
						alert('날라간다.')
					}}
				/>{' '}
				<ArticleBox
					title={'가방'}
					price={'10,000'}
					address={'서울시'}
					numInterest={10}
					numChat={30}
					imgSrc={'https://source.unsplash.com/user/USERNAME'}
					style={{ width: '20rem' }}
					onClick={() => {
						alert('날라간다.')
					}}
				/>{' '}
				<ArticleBox
					title={'가방'}
					price={'10,000'}
					address={'서울시'}
					numInterest={10}
					numChat={30}
					imgSrc={'https://source.unsplash.com/user/USERNAME'}
					style={{ width: '20rem' }}
					onClick={() => {
						alert('날라간다.')
					}}
				/>{' '}
			</S.Sec_CardListSection>
		</>
	)
}

export default InfoProducts

const Sec_CardListSection = styled.section`
	${flexAlign.flexCenter}
	${flexAlign.justifyCenter}
	flex-wrap: wrap;
	gap: 3rem;
`

const S = {
	Sec_CardListSection,
}
