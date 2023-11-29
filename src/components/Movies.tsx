import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react"

interface Movies {
    title: string
    backdrop_path: string
}

interface Props {
    movie: Movies
}

const Movies = ({movie}: Props) => {

    const [like, setLike] = useState(false)


  return (
    <div>
        <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{movie?.title}</p>
            <p>{like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
        </div>
    </div>
  )
}

export default Movies