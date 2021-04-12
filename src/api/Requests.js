const API_KEY = "393966212dde1f8752eb35830b4db0bd";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

/* 
Object Properties

{
    "backdrop_path": "/gL8myjGc2qrmqVosyGm5CWTir9A.jpg",
    "first_air_date": "2018-05-02",
    "genre_ids": [
        10759,
        18
    ],
    "id": 77169,
    "name": "Cobra Kai",
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "Cobra Kai",
    "overview": "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.",
    "popularity": 414.724,
    "poster_path": "/obLBdhLxheKg8Li1qO11r2SwmYO.jpg",
    "vote_average": 8.1,
    "vote_count": 2766
}


*/
