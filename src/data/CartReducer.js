import { ActionTypes } from "./Types";

export const CartReducer = (storeDate, action) => {
    let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeDate };

    const { payload } = action;
    const quantity = payload.quantity;
    const product = payload.product;

    const existingProduct = newStore.cart.find(item => item.id === product.id);

    switch (action){
        case ActionTypes.CART_ADD:
            if(existingProduct)
                existingProduct.quantity += quantity;
            else
                newStore.cart = [...newStore.cart, payload];

            newStore.cartItems += quantity;
            newStore.cartItems += quantity * product.price;

            return newStore;

        case ActionTypes.CART_UPDATE:
            if(existingProduct){
                const diff = quantity - existingProduct.quantity;
                newStore.cartItems += diff;
                newStore.cartPrice += diff * existingProduct.price;
                existingProduct.quantity = quantity;
            }

            return newStore;

        case ActionTypes.CART_REMOVE:
            if(existingProduct){
                newStore.cartItems -= existingProduct.quantity;
                newStore.cartPrice -= existingProduct.quantity * existingProduct.price;
                newStore.cart = newStore.filter(item => item.id !== existingProduct.id);
            }

            return newStore;

        case ActionTypes.CART_CLEAR:
            return { ...storeDate, cart: [], cartItems: 0, cartPrice: 0 };

        default:
            return storeDate || {};
    }
}