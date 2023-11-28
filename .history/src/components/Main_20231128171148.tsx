import React from 'react'

import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=2018e00e896b60ad09e7274e9840b070&language=en-US&page=1').then((res) => {
            console.log(res.json().)
        })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Main