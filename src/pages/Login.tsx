import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { UserAuth } from '../Authentification/AuthContext'


const Login = () => {
    

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')

    const {user, logIn} = UserAuth()

    const navigation = useNavigate()

    const SubmitForm = async(e: Event) => {
        e.preventDefault()
        try {
            await logIn(email, password)
            navigation('/home')
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div>
        <div className='w-full h-screen*'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/4d7877a7-9af5-4241-b7a0-898444209374/SN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                {error && <p className='p-3 bg-red-400 my-2'>{error}</p>}
                <form
                    onSubmit={(e) => SubmitForm(e)}
                    className='w-full flex flex-col py-4'
                >
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='p-3 my-2 bg-gray-700 rouded'
                    type='email'
                    placeholder='Email'
                    autoComplete='email'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    className='p-3 my-2 bg-gray-700 rouded'
                    type='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    />
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                    Sign Up
                    </button>
                    <div className='flex justify-between items-center text-sm text-gray-600'>
                    <p>
                        <input className='mr-2' type='checkbox' />
                        Remember me
                    </p>
                    <p>Need Help?</p>
                    </div>
                    <p className='py-8'>
                    <span className='text-gray-600'>
                        Already subscribed to Netflix?
                    </span>{' '}
                    <Link to='/signup'>Sign Up</Link>
                    </p>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login