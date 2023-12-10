import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [0],
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value.push(0)
		},
		decrement: (state) => {
			state.value.pop()
		},
		mask: (state, action) => {
			console.log(action.payload)
			state.value = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, mask } = counterSlice.actions

export default counterSlice.reducer
