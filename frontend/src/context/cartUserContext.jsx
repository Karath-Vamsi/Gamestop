import React, { createContext, useState } from 'react'
const CartUserContext = createContext()
const CartUserProvider = (props) => {
    const [ isUserValid, setIsUserValid] = useState( false)
  return (
    <CartUserContext.Provider value={ [ isUserValid, setIsUserValid]}>
        {props.children}
    </CartUserContext.Provider>
  )
}
export { CartUserProvider}
export default CartUserContext