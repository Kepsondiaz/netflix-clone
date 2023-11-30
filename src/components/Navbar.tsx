import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../Authentification/AuthContext"

const Navbar = () => {

  const {user, logOut} = UserAuth()

  const navigation  = useNavigate()

  const handleSubmit = async() => {
    try {
      await logOut()
      navigation('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-around p-4 z-[100] w-full absolute">
      <Link to="/">
          <img className="w-32" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
      </Link>
      {user?.email ? (
        <div>
            <Link to={'/account'}>
                <button className="text-white pr-4">Account</button>
            </Link>
              <button 
              onClick={() => handleSubmit()}
              className="bg-red-600 text-white  px-6 py-2 rounded cursor-pointer">Logout</button>
        </div>
      ) : (
<p></p>
      )
    }
    </div>
  )
}

export default Navbar