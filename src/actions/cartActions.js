import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from './action-types/cartActionTypes'


//add item to cart action
export const addToCart = (id) => {
    return{
        type: ADD_TO_CART,
        id
    }
}

//remove item from cart action
export const removeItem = (id) => {
    return{
        type: REMOVE_ITEM,
        id
    }
}

//subtract quantity action
export const subtractQuantity = (id) => {
    return{
        type: SUB_QUANTITY,
        id
    }
}

//add quantity action
export const addQuantity = (id) => {
    return{
        type: ADD_QUANTITY,
        id
    }
}



// const allActions = {
//     addToCart,
//     removeItem,
//     subtractQuantity,
//     addQuantity
// }

// export default allActions