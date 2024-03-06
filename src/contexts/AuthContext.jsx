import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react"

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            localStorage.removeItem('user')
            return { user: null }
        default:
            return state
    }
}

export default function AuthContextProvider({children}) {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            
            dispatch({ type: 'LOGIN', payload: user })
        }

        else{
            dispatch({type:'LOGOUT'})
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw Error('useAuthContext must be used inside a AuthContextProvider')
    }
  
    return context;
}