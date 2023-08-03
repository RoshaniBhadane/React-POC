import { Outlet, Navigate } from "react-router-dom"
import { AuthenticationContext } from "./Authentication"
import { useContext } from "react"

const ProtectedRoute = () => {
    const { isLoggedIn } = useContext(AuthenticationContext)
    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoute