import axios from "axios"
import { useEffect, useState } from "react"
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movies from "./Movies"


interface Props {
    title: string
    fetchUrl: string
    rowID: string
}

const Row = ({title, fetchUrl, rowID}: Props) => {

    const [movies, setMovies] = useState([])
    

    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchUrl])

    const slideLeft = () => {
        const slider = document.getElementById('slider' + rowID)
        slider!.scrollLeft = slider!.scrollLeft - 500
    } 

    const slideRight = () => {
        const slider = document.getElementById('slider' + rowID)
        slider!.scrollLeft = slider!.scrollLeft + 500
    } 

  return (
    <div>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center group">
            <MdChevronLeft
                onClick={slideLeft}
                className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
             />
            <div id={"slider" + rowID}  className="overflow-x-scroll whitespace-nowrap overflow-hidden scroll-smooth">
                {
                    movies.map((movie) => (
                        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                            <Movies movie={movie} />
                        </div>
                    ))}
            </div>
            <MdChevronRight 
                onClick={slideRight}
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
            />
        </div>
    </div>
  )
}

export default Row