const key = "2018e00e896b60ad09e7274e9840b070"

const request = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`, 
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    topRelatede: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
}


export default request; 