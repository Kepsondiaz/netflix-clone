const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
        <h1 className=text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
        <div>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar