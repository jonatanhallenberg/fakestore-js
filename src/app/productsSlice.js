import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async (args, { dispatch }) => {
        dispatch(productsSlice.actions.setLoading())
        return fetch("https://fakestore-iths-api.herokuapp.com/products")
            .then(res => res.json())
            .then(json => {
                return json;
            })
    }
)

export const productsSlice = createSlice({
    name: "products",
    initialState: { items: [], isLoading: false },
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        }
    }
})

export default productsSlice.reducer;