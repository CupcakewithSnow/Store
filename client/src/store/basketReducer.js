const SET_PRODUCT = 'SET_BASKET'
const SET_CART = 'SET_CART'
const NULIFY_ARR = 'NULIFY_ARR'
const defaultState = {
    basket:[],
    cart:[]
   
}
export default function basketReducer(state = defaultState,action){
    switch(action.type){
        case SET_PRODUCT:
            return {
                ...state,
                basket:action.product
                
            }
        case SET_CART:
            return{
                ...state,
                cart:[...state.cart,action.products]
            }
        case NULIFY_ARR:
            return{
                ...state,
                cart:[]
            }
        default:
            return state
    }
}
export const setBasketAC = (product)=>{
    return {type:SET_PRODUCT,product}
}
export const setCartAC = (products)=>{
    return {type:SET_CART,products}
}
export const nulifyAC = ()=>{
    return {type:NULIFY_ARR}
}