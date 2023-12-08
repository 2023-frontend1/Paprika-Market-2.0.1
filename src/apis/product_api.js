import axios from 'axios'

/**  get12ProductSummeryByPage
 *
 * @param {page: number}
 * @return {
 * 	productId: number
 * 	userId: number
 * 	chattingCnt: number
 * 	interestCnt: number
 * 	productName: string
 * 	productPrice: number
 * 	srcs: Array<string>
 * 	userLocation: string
 * }
 *
 * - page 번호(기본값 1) 에 따라, 최대 12개의 ProductSummery data 요청
 * - market page 등에서 article 로 출력할 때, 호출 api
 */
const get12ProductSummeryByPage = async (page = 1) => {
	try {
		const products = await axios.get(`/api/products/${page}`, {})
		return products.data
	} catch (error) {
		return {}
	}
}

/** getProductDetailById
 *
 * @param {id: number}
 * @returns {
 *  chattingCnt: number
 *  interestCnt: number
 *  mannerTemperature: number
 *  productDetail: string
 *  productId: number
 *  productPrice: number
 *  srcs: Array<string>
 *  status: ["onSale"|"complete"]
 *  userId: number
 *  userLocation: string
 *  userNickname: string
 * }
 *
 * - 상품 id 값을 입력받아 상품의 상세 정보를 반환
 * - ProductPage 등에서 호출
 */

const getProductDetailById = async (id) => {
	try {
		const product = await axios.get(`/api/products/detail/${id}`, {})
		console.log(product.data)
		return product.data
	} catch (error) {
		console.log(error)
		return {}
	}
}

export { get12ProductSummeryByPage, getProductDetailById }
