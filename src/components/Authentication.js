import React from 'react'
import { createContext, useState } from "react";

export const AuthenticationContext = React.createContext(null);

const Authentication = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    const login = (status) => {
        setLoggedIn(status)
    }

    return (
        <AuthenticationContext.Provider value={{ isLoggedIn, login }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default Authentication