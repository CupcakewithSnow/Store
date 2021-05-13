const SET_PRODUCT = 'SET_PRODUCT'
const SET_TYPE = 'SET_TYPE'
const defaultState = {
    product: [],
    author: [],
    type: [],
}
export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product
            }
        case SET_TYPE:
            return {
                ...state,
                type: action.typs
            }
        default:
            return state
    }
}
export const setTypeAC = (typs) => {
    return { type: SET_TYPE, typs }
}
export const setProductAC = (product) => {
    return { type: SET_PRODUCT, product }
}