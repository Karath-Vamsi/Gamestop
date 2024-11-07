import React, { createContext, useState } from 'react'

const UsernameContext = createContext()

const UsernameProvider = ( props) => {
    const [ username, setUsername] = useState( "")
    return (
    <UsernameContext.Provider value = { [ username, setUsername]}>
        { props.children}
    </UsernameContext.Provider>
  )
}

export {UsernameProvider}
export default UsernameContext