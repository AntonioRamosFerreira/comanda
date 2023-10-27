import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext({})

export function AuthProvider ({children}){
    const [username, setUsername] = useState("Wilson")


    async function login (credenciais){
        const resp = await axios.get("http://localhost:3000/usuarios")
        const usuarios = resp.data

        const usuario = usuarios.find(u => u.email == credenciais.email)
        if (usuario && usuario.senha == credenciais.senha){
            setUsername(usuario.nome)
            return true
        }

        return false

    }


    return (
        <AuthContext.Provider value={{username, login}}>
            {children}
        </AuthContext.Provider>
    )
}