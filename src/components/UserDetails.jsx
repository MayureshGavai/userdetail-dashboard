import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const UserDetails = () => {

  const {selectedUser} = useContext(UserContext)

  return (
    <div className='w-3/4 m-3'>
      <h1 className='m-2 font-semibold text-lg'>User Details</h1>
      <div className='selection:bg-sky-500 selection:text-white'>
          {
            selectedUser ? (
              <div className='m-2 '>
                <form action="">
                <div className='mt-4 '>
                  <h1 className='font-medium mb-3'>Name Details</h1>
                  <div className='grid grid-cols-3 gap-6 border-b pb-4 '>
                    
                    {/* Name */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="name">Name</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.name} readOnly /> 
                    </div>
                    
                    {/* username */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="usename">Username</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.username} readOnly /> 
                    </div>

                    {/* email */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="mail">Email</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="email" value={selectedUser.email} readOnly /> 
                    </div>

                  </div>
                </div>

                <div className='mt-4'>
                  <h1 className='font-medium mb-3'>Address Details</h1>
                  <div className='grid grid-cols-2 gap-6 pb-4 '>
                    
                    {/* street */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="street">Street</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.address.street} readOnly /> 
                    </div>

                    {/* suite */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="suite">Suite</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.address.suite} readOnly /> 
                    </div>

                  </div>

                  <div className='grid grid-cols-2 gap-6 border-b pb-4 '>
                    
                    {/* city */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="city">City</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.address.city} readOnly /> 
                    </div>

                    {/* zip */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="zip">Zipcode</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.address.zipcode} readOnly /> 
                    </div>
                    
                  </div>
                </div>

                <div className='mt-4'>
                 <h1 className='font-medium mb-3'>Other Details</h1>

                  <div className='grid grid-cols-2 gap-6 border-b pb-4 '>
                    
                    {/* phone */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="phone">Phone</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.phone} readOnly /> 
                    </div>

                    {/* website */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="website">Website</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.website} readOnly /> 
                    </div>
                    
                  </div>
                </div>

                <div className='mt-4'>
                 <h1 className='font-medium mb-3'>Company Details</h1>

                  <div className='grid grid-cols-2 gap-6 border-b pb-4 '>
                    
                    {/* company name */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="company">Company</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.company.name} readOnly /> 
                    </div>

                    {/* comapny business */}
                    <div>
                      <label className='block mb-2 text-sm text-slate-700' htmlFor="business">Business Type</label>
                      <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500' type="text" value={selectedUser.company.bs} readOnly /> 
                    </div>
                    
                  </div>
                </div>
                
                </form>
                  


              </div>
              // <div className='m-2'>
              //   <form>
              //     <div className='grid grid-cols-2 gap-6'>
              //       {/* username */}
              //       <div>
              //           <label className='block mb-2 text-sm'>Username</label>
              //           <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500'  type="text" name="" value={selectedUser.name} />
              //       </div>
              //       <div>
              //           <label className='block mb-2 text-sm'>Username</label>
              //           <input className='w-full p-2 border rounded-md focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500'  type="text" name="" value={selectedUser.name} />
              //       </div>
              //     </div>
              //   </form>
              // </div>
            ):(
              <div className='text-gray-900 bg-gray-900/10 border rounded-md p-4 flex items-center'>
                <svg height="16" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/></svg>
                <h1 className='text-lg font-semibold '>Select user</h1>
              </div>
            )
          }
      </div>
    </div>
  )
}

export default UserDetails