import { http, HttpResponse } from 'msw'
import product from './Product.json'
import review from './Review.json'
import user from './User.json'

const findUserOneById = (id) => {
	const $users = user.users
	return $users.find((userOne) => userOne.userId === +id)
}

const findProductOneById = (id) => {
	const $products = product.products
	return $products.find((productOne) => productOne.productId === +id)
}

export const handlers = [
	http.get('/api/products/:page', ({ params }) => {
		const { page } = params

		/** 전달할 데이터 갯수 */
		const numOfResponses = 12

		/** 판매 중인 상품 데이터 */
		const $products = product.products
			.filter((productOne) => productOne.status === 'onSale')
			.sort((x) => x.productId)

		/** 전달받은 page 를 기준으로 12 개의 상품 데이터 범위 */
		const lower = (+page - 1) * numOfResponses
		const higher = lower + numOfResponses
		const splicedProductArr = $products.slice(lower, higher)

		/** 응답 데이터 생성 */
		const response = splicedProductArr.map((productOne) => {
			const owner = findUserOneById(productOne.userId)
			return {
				productId: productOne.productId,
				srcs: productOne.srcs,
				productName: productOne.productName,
				productPrice: productOne.productPrice,
				interestCnt: productOne.interestCnt,
				chattingCnt: productOne.chattingCnt,
				userId: owner.userId,
				userLocation: owner.userLocation,
				userTemperature: owner.userTemperature,
			}
		})
		return HttpResponse.json(response)
	}),

	http.get('/api/products/detail/:id', ({ params }) => {
		const { id } = params
		/** 전달받은 id 값과 같은 상품 찾기 */
		const foundProduct = findProductOneById(id)
		/** 상품 정보에 기록된 userId 로 해당 상품을 올린 사용자 찾기 */
		const foundOwner = findUserOneById(foundProduct.userId)
		/** 응답 데이터 생성 */
		const response = {
			productId: foundProduct.productId,
			productName: foundProduct.productName,
			srcs: foundProduct.srcs,
			productPrice: foundProduct.productPrice,
			interestCnt: foundProduct.interestCnt,
			chattingCnt: foundProduct.chattingCnt,
			productDetail: foundProduct.productDetail,
			status: foundProduct.status,
			userId: foundOwner.userId,
			userNickname: foundOwner.userNickname,
			userLocation: foundOwner.userLocation,
			mannerTemperature: foundOwner.mannerTemperature,
		}
		return HttpResponse.json(response)
	}),

	http.get('/api/users/:id', ({ params }) => {
		const { id } = params
		const $reviews = review.reviews
		/** 전달받은 id 값으로 사용자 찾기 */
		const foundUser = findUserOneById(id)

		/** 사용자에 올린 상품정보 중 각 상품의 다음 값들만 처리
		 *
		 * productId: number,
		 * srcs: Array<number>,
		 * productName: string,
		 * interestCnt: number,
		 * chattingCnt: number,
		 * status: ['onSale'|'complete'],
		 */
		const productIds = foundUser.itemIdList
		const usersProducts = productIds.map((productId) => {
			const foundProduct = findProductOneById(productId)
			return {
				productId: productId,
				srcs: foundProduct.srcs,
				productName: foundProduct.productName,
				productPrice: foundProduct.productPrice,
				interestCnt: foundProduct.interestCnt,
				chattingCnt: foundProduct.chattingCnt,
				status: foundProduct.status,
			}
		})

		/** 사용자에 올린 상품 에 대한 리뷰정보 중 다음 값들만 처리
		 *
		 * reviewId: number,
		 * description: string,
		 * createAt: string,
		 * productId: number,
		 * userId: number,
		 * userNickname: string,
		 */
		const usersProductsReviews = []
		productIds.forEach((productId) => {
			$reviews.forEach((reviewOne) => {
				if (reviewOne.productId === productId) {
					const userOne = findUserOneById(reviewOne.userId)
					usersProductsReviews.push({
						...reviewOne,
						userLocation: userOne.userLocation,
						userId: userOne.userId,
						userNickname: userOne.userNickname,
					})
				}
			})
		})

		/** 응답 데이터 생성 */
		const response = {
			userId: foundUser.userId,
			userNickname: foundUser.userNickname,
			userLocation: foundUser.userLocation,
			mannerRate: foundUser.mannerRate,
			mannerTemperature: foundUser.mannerTemperature,
			products: [...usersProducts],
			reviews: [...usersProductsReviews],
		}

		return HttpResponse.json(response)
	}),
]
