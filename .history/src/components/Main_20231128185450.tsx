import request from '../Request'
import axios from 'axios'

import { useState, useEffect } from 'react'

interface Movies {
    title: string
    backdrop_path: string
}


const Main = () => {

    const [movies, setMovies] = useState([])

    const movie: Movies = movies[Math.floor(Math.random()*movies.length)]

    useEffect(() => {
        axios.get(request.popular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    console.log(movie)

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
        <div>
           <div>
        </div> 
        </div>
    </div>
  )
}

export default Main