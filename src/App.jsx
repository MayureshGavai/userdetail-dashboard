import React from 'react'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'

const App = () => {
  return (
    <div className='flex'>
        <UserList/>
        <UserDetails/>
    </div>
  )
}

export default App