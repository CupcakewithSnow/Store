import { setProductAC, setTypeAC } from '../store/productReducer'
import { $host, $authHost } from './indexHttp'
import { setBasketAC, setCartAC,} from '../store/basketReducer'
export const createType = async (type) => {
    const { data } = await $authHost.post('srv/type', type)
    return data
}
export const getTypes = () => {
    return async (dispatch) => {
        const {data} = await $host.get('srv/type')
        dispatch(setTypeAC(data.rows))
    }
}
export const cteateProduct = async (product) => {
    const { data } = await $authHost.post('srv/product', product)
    return data
}
export const getProductOfBasket = (id)=>{
    return async(dispatch)=>{
        const {data} = await $authHost.get(`srv/product?id=${id}`)
        data.rows.map(p=>{dispatch(setCartAC(p))})
    }
}
export const getProduct = () => {
    return async (dispatch) => {
        const {data} = await $host.get('srv/product')
        dispatch(setProductAC(data.rows.map(p=>{return p})))
    }
}
export const getOneProduct = async (id) => {
    const { data } = await $authHost.get('srv/product/' + id)
    return data
}
export const addProductCart = async (basketProduct) => {
    const data = await $authHost.post('srv/basketProduct', basketProduct)
    return data
}
export const getProductCart = (basketId) => {
    return async (dispatch) => {
        const { data } = await $authHost.get(`srv/basketProduct?basketId=${basketId}`)
        dispatch(setBasketAC(data.rows))
    }
}

