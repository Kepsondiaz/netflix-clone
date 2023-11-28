import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
        <div>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar