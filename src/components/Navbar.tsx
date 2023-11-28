import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-around p-4 z-[100] w-full absolute">
      <Link to="/">
          <img className="w-24" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
      </Link>
        <div>
            <button className="bg-red-600 text-white  px-6 py-2 rounded cursor-pointer">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar