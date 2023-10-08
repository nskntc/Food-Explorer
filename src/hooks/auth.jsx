import { useState, createContext, useContext, useEffect } from "react"

import { api } from "../services/api"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [data, setData] = useState({})

    const signIn = async({ email, password }) => {
        try{
            const response = await api.post("/sessions", { email, password })
            
            const { user, token } = response.data

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({ user, token })
        } catch(error){
            error.response ? alert(error.response.data.message) : ("Não foi possível fazer login.")
        }
    }

    const signOut = () => {
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")

        setData({})
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token")
        const user = localStorage.getItem("@rocketnotes:user")

        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            
            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}