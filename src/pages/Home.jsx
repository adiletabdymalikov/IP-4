import { useState, useEffect } from "react";
import axios from 'axios';


const Home = () => {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7';
    const [movie, setmovie] = useState(null);
    const [moviTrend, setMoviTrend] = useState(null);

    let movieF = async () => {
        let movieData = await axios({
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1',
            method: "get"
        });
        if (movieData != null && movieData.status === 200) {
            setmovie(movieData.data.results);
        }
    };

    let trendF = async () => {
        let trendData = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
        });
        if (trendData != null && trendData.status === 200) {
            setMoviTrend(trendData.data.results);
        }
    };

    useEffect(() => {
        movieF();
        trendF();
    }, []);

    return (
        <div>
          
            <div className="col-lg-10 mx-auto text-white px-3" style={{ background: 'linear-gradient(#0d253fb3,#0d253fb3) , url("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/6LfVuZBiOOCtqch5Ukspjb9y0EB.jpg") center/cover', height: "40vh", paddingTop: '100px' }}>
                <h1 style={{ fontSize: "65px" }}>Добро пожаловать.</h1>
                <h1>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h1>
            </div>

            <div className="col-lg-11 mt-3 mx-auto">
                <br /><br />
                <h4 className="mx-3">Что популярно</h4>
                <div className="col-lg-12 scrollHome text-center mx-auto">
                    {movie != null ?
                        movie.map(i => (
                          
                            <div key={i.id} className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2 mt-3 mb-1 col-lg-2">
                                <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /><br />
                                <a href={"/detail/" + i.id}><h5>{i.title}</h5></a>   
                                <p>{i.release_date}</p>
                            </div>
                        )) : <div>loading</div>}
                </div>
            </div>

            <div className="col-lg-11 mt-3 mx-auto">
                <br /><br />
                <h4 className="mx-3">В тренде</h4>
                <div className="col-lg-12 scrollHome text-center mx-auto">
                    {moviTrend != null ?
                        moviTrend.map(i => (
                          
                            <div key={i.id} className="col-6 col-md-4 bg-light p-2 mx-2 block mt-3 mb-1 col-lg-2">
                                <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /><br />
                                <a href={"/detail/" + i.id}><h5>{i.title}</h5></a>  
                                <p>{i.release_date}</p>
                            </div>
                        )) : <div>loading</div>}
                </div>
            </div>
        </div>
    );
};

export default Home;