import styled from 'styled-components'
import { flexAlign } from '../../../styles/themes/@index'
import ArticleBox from '../../../components/article_box'
import changePrice from '../../../utils/change_price'
const InfoProducts = ({ usersum }) => {
	return (
		<>
			<S.Sec_CardListSection>
				{usersum.products &&
					usersum.products.map((item, idx) => {
						return (
							<ArticleBox
								key={idx}
								title={item.productName}
								price={changePrice(item.productPrice)}
								address={usersum.userLocation}
								numInterest={item.interestCnt}
								numChat={item.chattingCnt}
								imgSrcs={item.srcs}
								style={{ width: '20rem' }}
								onClick={() => {
									alert('날라간다.')
								}}
							/>
						)
					})}
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
