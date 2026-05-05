import { ColorFail, ColorRequest, ColorSuccess } from "../reducers/Color_Reducer"


export const ColorChangection = (data) => async (dispatch) => {
    dispatch(ColorRequest())
    try {
        dispatch(ColorSuccess(data))

    } catch (error) {
        dispatch(ColorFail("Some Color Error"))

    }
}