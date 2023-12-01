import axios from 'axios'

/** getUserInfoById
 *
 * @param {id: number}
 * @returns {
 *  mannerRate: Array<number>(8)
 *  products: [
 *   chattingCnt: number
 *   interestCnt: number
 *   productId: number
 *   productName: string
 *   srcs: Array<string>
 *   status: ["onSale"|"complete"]
 *  ]
 *  reviews: [
 *   createAt: string
 *   description: string
 *   productId: number
 *   reviewId: number
 *   userId: number
 *   userNickname: string
 *  ]
 *  userId: number
 *  userLocation: string
 *  userNickname: string
 * }
 *
 * 사용자의 id 값을 입력받아 사용자의 상세 정보를 반환
 * UserPage 등에서 호출
 */
const getUserInfoById = async (id) => {
	try {
		const user = await axios.get(`/api/users/${id}`, {})
		console.log(user.data)
		return user.data
	} catch (error) {
		console.log(error)
		return {}
	}
}

export { getUserInfoById }
