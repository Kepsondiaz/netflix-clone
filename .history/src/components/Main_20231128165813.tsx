import React from 'react'

import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
            method: 'GET', 
            headers: {Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDE4ZTAwZTg5NmI2MGFkMDllNzI3NGU5ODQwYjA3MCIsInN1YiI6IjY1NjYxMzQ2YThiMmNhMDEwYmMxMjQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ivqm2vC2_F1wsI2_EwFY7fkdIBNikmD1LvifhTtvGY4'}
        })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Main