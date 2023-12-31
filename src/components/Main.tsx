import request from '../Request'
import axios from 'axios'

import { useState, useEffect } from 'react'

interface Movies {
    title: string
    backdrop_path: string
    release_date: string
    overview: string
}


const Main = () => {

    const [movies, setMovies] = useState([])

    const movie: Movies = movies[Math.floor(Math.random()*movies.length)]

    useEffect(() => {
        axios.get(request.popular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])


    const truncateString = (str: string, num: number) =>
    {
        if (str?.length > num)
            return str.slice(0, num) + '...'
        return str
    }

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
        <div className='absolute w-full top-[20%] md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold py-3'>{movie?.title}</h1>
            <div>
                <button className='border bg-gray-300 text-black border-gray-300  py-2 px-5'>Play</button>
                <button className='border text-white border-gray-300 px-5 py-2 ml-4'>Watch Later</button>
            </div> 
            <p className='text-gray-400 text-sm py-3'>Release: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 100)}</p>
        </div>
    </div>
  )
}

export default Main