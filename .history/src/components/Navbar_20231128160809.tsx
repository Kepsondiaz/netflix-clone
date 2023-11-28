const Navbar = () => {
  return (
    <div className="flex items-center justify-around">
        <h1 className="text-red-600 text-4xl p-4 font-bold cursor-pointer">Netflix</h1>
        <div>
            <button className="bg-red-600">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar