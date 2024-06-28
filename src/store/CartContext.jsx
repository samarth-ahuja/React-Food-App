import { createContext, useReducer } from "react";

function cartItemsReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        if (state.length == 0 || state.findIndex(item => item.id == action.payload.itemData.id) == -1) {
            return [...state, { ...action.payload.itemData, quantity: 1 }]
        }
        let newData = state.map((item) => {
            if (item.id === action.payload.itemData.id) {
                const qty = item.quantity;
                return { ...action.payload.itemData, quantity: qty + 1 };
            }
            return item;
        });
        return newData;
    }
    if (action.type === 'REMOVE_ITEM') {
        if (state.length > 0) {
            let list = state.map((item) => {
                if (item.id === action.payload.itemData.id) {
                    if (item.quantity > 1) {
                        const qty = item.quantity;
                        return { ...action.payload.itemData, quantity: qty - 1 };
                    }
                    else{
                        return null;
                    }
                }
                return item;
            })
            return list.filter(item=>item);
        }
        return state;
    }
}

export const CartContext = createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { },
})

export default function CartContextProvider({ children }) {
    const [cartItems, cartItemsDispatcher] = useReducer(cartItemsReducer, []);
    function addItem(itemData) {
        cartItemsDispatcher({
            type: 'ADD_ITEM',
            payload: {
                itemData,
            }
        })
    }
    function removeItem(itemData) {
        cartItemsDispatcher({
            type: 'REMOVE_ITEM',
            payload: {
                itemData,
            }
        })

    }
    return (
        <CartContext.Provider value={{ items: cartItems, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}