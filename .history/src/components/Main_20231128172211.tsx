import React from 'react'
import request from '../Request'
import axios from 'axios'

import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(request.popular).then((response) => {
            console.log
        })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Main