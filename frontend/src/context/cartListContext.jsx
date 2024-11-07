import { createContext, useState } from 'react'

const CartListContext = createContext();
const CartListProvider = (props) => {
  const [ cartContent, setCartContent] = useState( [])
  return (
    <CartListContext.Provider value={ [ cartContent, setCartContent]}>
        { props.children}
    </CartListContext.Provider>
  )
}
export { CartListProvider}
export default CartListContext