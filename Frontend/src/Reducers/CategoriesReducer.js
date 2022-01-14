import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data: []
}
const CategorySlice = createSlice({
    name: 'Category',
    initialState,
    getList(state, action) {
        // state.data = action.payload
    },
})
export default CategorySlice.reducer