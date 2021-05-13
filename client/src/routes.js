import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, USER_PAGE} from './const/const'
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import Product from './pages/Product'
import Shop from './pages/Shop'
import UserPage from './pages/UserPage'
export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        component:Admin
    },
    {
        path:BASKET_ROUTE,
        component:Basket
    },
    {
        path:USER_PAGE,
        component:UserPage
    }
]
export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        component:Auth
    },
    {
        path:REGISTRATION_ROUTE,
        component:Auth
    },
    {
        path:SHOP_ROUTE,
        component:Shop
    },
    {
        path:PRODUCT_ROUTE + '/:id',
        component:Product
    }
]