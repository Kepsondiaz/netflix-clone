import React from 'react'
import request from '../Request'
import axios from 'axios'

import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies.[Math.floor]

    useEffect(() => {
        axios.get(request.popular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Main