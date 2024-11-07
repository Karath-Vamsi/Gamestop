import React, { createContext, useState } from 'react'

const CartSignInContext = createContext()
const CartSignInProvider = ( props) => {
    const [ isUserSignedIn, setIsUserSignedIn] = useState( false)
  return (
    <CartSignInContext.Provider value={ [ isUserSignedIn, setIsUserSignedIn]}>
        { props.children}
    </CartSignInContext.Provider>
  )
}

export {CartSignInProvider}
export default CartSignInContext