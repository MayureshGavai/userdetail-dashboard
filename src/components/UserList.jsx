import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const UserList = () => {

    const {users, selectUser} = useContext(UserContext)


  return (
    <div className='w-1/4 m-3 pr-3 border-r'>
        <h1 className='m-2 font-semibold text-lg'>List of Users</h1>
        <ul className=''>
            {
                users.map((user)=>(
                    
                    <li key={user.id} 
                        className='p-3 my-1 border rounded-lg hover:bg-sky-400 hover:text-white cursor-pointer active:bg-sky-500' 
                        onClick={()=>selectUser(user)}>
                        <h1 className='text-md font-medium'>{user.name}</h1>
                        <div className='flex text-xs mt-1'>
                            <span>{user.company.name}, {user.address.city}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
    
  )
}

export default UserList