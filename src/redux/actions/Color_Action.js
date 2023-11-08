import { ColorFail, ColorRequest, ColorSuccess } from "../reducers/Color_Reducer"


export const ColorChangection = (data) => async (dispatch) => {
    dispatch(ColorRequest())
    console.log(data, 'datas')
    try {
        dispatch(ColorSuccess(data))

    } catch (error) {
        dispatch(ColorFail("Some Color Error"))

    }
}