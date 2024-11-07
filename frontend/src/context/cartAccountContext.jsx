import React, { createContext, useState } from 'react'
const CartAccountContext = createContext()
const CartAccountProvider = ( props) => {
    const [ isAccoutOpen, setIsAccountOpen] = useState( false)
  return (
    <CartAccountContext.Provider value={ [ isAccoutOpen, setIsAccountOpen]}>
        { props.children}
    </CartAccountContext.Provider>
  )
}
export { CartAccountProvider}
export default CartAccountContext