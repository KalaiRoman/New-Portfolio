import { createSlice } from "@reduxjs/toolkit";


const userClick_Reducer = createSlice({
    name: "userclick",
    initialState: {
        loading: false,
        data:[]
    },
    reducers: {
        userClickRequest(state, action) {
            return {
                loading: true
            }
        },
        userClickSuccess(state, action) {
            return {
                loading: false,
                data: action.payload,

            }
        },
        userClickFail(state, action) {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})

const { actions, reducer } = userClick_Reducer;
export const { userClickRequest, userClickSuccess, userClickFail } = actions;
export default reducer;