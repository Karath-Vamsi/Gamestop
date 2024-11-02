import { createContext, useState } from "react";
const CartContext = createContext();
function CartProvider(props){
    const [ isCartOpen, setIsCartOpen] = useState( false)
    return(
        <CartContext.Provider value = { [ isCartOpen, setIsCartOpen]}>
            { props.children}
        </CartContext.Provider>
    )
}
export {CartProvider}
export default CartContext