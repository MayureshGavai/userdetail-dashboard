import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(()=>{
        const fetchData = async()=> {
        try{
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
                const data = await res
                setUsers(data.data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])
    const selectUser = (user) => {
        setSelectedUser(user)
    }


    return <UserContext.Provider value={{users,selectUser, selectedUser}}>
        {children}
    </UserContext.Provider>
}