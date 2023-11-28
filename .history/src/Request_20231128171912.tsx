const key = "2018e00e896b60ad09e7274e9840b070"

const request = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`, 
    topRelated: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`, 
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`, 

}