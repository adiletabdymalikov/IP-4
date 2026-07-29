import React, { useState, useEffect } from "react";
import axios from 'axios';
import { translations } from "../translations";

const Home = () => {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7';
    const [movie, setmovie] = useState(null);
    const [moviTrend, setMoviTrend] = useState(null);

    const currentLang = localStorage.getItem('appLang') || 'ru';
    const t = translations[currentLang] || translations.ru;
    const apiLang = `${currentLang}-${currentLang.toUpperCase()}`;

    
    const changeLanguage = (langCode) => {
        localStorage.setItem('appLang', langCode);
        window.location.reload();
    };

    let movieF = async () => {
        let movieData = await axios({
            url: `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=${apiLang}&page=1`,
            method: "get"
        });
        if (movieData != null && movieData.status === 200) {
            setmovie(movieData.data.results);
        }
    };

    let trendF = async () => {
        let trendData = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=${apiLang}&page=1`
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
           
            <div className="container mt-3 text-center">
                <div className="btn-group" role="group" aria-label="Language switch">
                    <button 
                        type="button" 
                        className={`btn ${currentLang === 'ru' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => changeLanguage('ru')}
                    >
                        Русски
                    </button>
                    <button 
                        type="button" 
                        className={`btn ${currentLang === 'en' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => changeLanguage('en')}
                    >
                        English
                    </button>
                    <button 
                        type="button" 
                        className={`btn ${currentLang === 'it' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => changeLanguage('it')}
                    >
                        Italiano
                    </button>
                </div>
            </div>

            <div className="col-lg-10 mx-auto text-white px-3 mt-3" style={{ background: 'linear-gradient(#0d253fb3,#0d253fb3) , url("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/6LfVuZBiOOCtqch5Ukspjb9y0EB.jpg") center/cover', height: "40vh", paddingTop: '100px' }}>
                <h1 style={{ fontSize: "65px" }}>{t.welcomeTitle}</h1>
                <h1>{t.welcomeSubtitle}</h1>
            </div>

            <div className="col-lg-11 mt-3 mx-auto text-white">
                <br /><br />
                <h4 className="mx-3">{t.whatIsPopular}</h4>
                <div className="col-lg-12 scrollHome text-center mx-auto">
                    {movie != null ?
                        movie.map(i => (
                            <div key={i.id} className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2 mt-3 mb-1 col-lg-2 text-white">
                                <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /><br />
                                <a href={"/detail/" + i.id} className="text-info text-decoration-none"><h5>{i.title}</h5></a>   
                                <p>{i.release_date}</p>
                            </div>
                        )) : <div>{t.loading}</div>}
                </div>
            </div>

            <div className="col-lg-11 mt-3 mx-auto text-white">
                <br /><br />
                <h4 className="mx-3">{t.trending}</h4>
                <div className="col-lg-12 scrollHome text-center mx-auto">
                    {moviTrend != null ?
                        moviTrend.map(i => (
                            <div key={i.id} className="col-6 col-md-4 bg-dark text-white p-2 mx-2 block mt-3 mb-1 col-lg-2 rounded border border-secondary">
                                <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /><br />
                                <a href={"/detail/" + i.id} className="text-info text-decoration-none"><h5>{i.title}</h5></a>  
                                <p>{i.release_date}</p>
                            </div>
                        )) : <div>{t.loading}</div>}
                </div>
            </div>
        </div>
    );
};

export default Home;