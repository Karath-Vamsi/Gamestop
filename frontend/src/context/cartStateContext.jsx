import { createContext, useState } from "react";
const CartStateContext = createContext();
function CartStateProvider(props){
    const [ isCartOpen, setIsCartOpen] = useState( false)
    return(
        <CartStateContext.Provider value = { [ isCartOpen, setIsCartOpen]}>
            { props.children}
        </CartStateContext.Provider>
    )
}
export {CartStateProvider}
export default CartStateContext