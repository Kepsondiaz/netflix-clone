import React from 'react'

import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
            method: 'GET', 
            
        })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Main