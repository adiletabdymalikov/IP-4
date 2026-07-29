import React, { useState, useEffect } from "react";
import axios from "axios";
import { translations } from "../translations";

const LatestMovie = () => {
    const [latest, setLatest] = useState(null);
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7';

    const currentLang = localStorage.getItem('appLang') || 'ru';
    const t = translations[currentLang] || translations.ru;
    const apiLang = `${currentLang}-${currentLang.toUpperCase()}`;

    let LatestF = async () => {
        try {
            let latestData = await axios({
                url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=${apiLang}&page=1`,
                method: 'get'
            });
            if (latestData != null && latestData.status === 200) {
                setLatest(latestData.data.results);
            }
        } catch (error) {
            console.error("Ошибка при загрузке новинок:", error);
        }
    };

    useEffect(() => {
        LatestF();
    }, []);

    return (
        <div className="container mt-5 text-white">
            <h1 className="text-center mb-4">{t.latestMovies || "Последние новинки"}</h1>
            <div className="row">
                {latest != null ? (
                    latest.map(i => (
                        <div key={i.id} className="col-6 col-md-4 col-lg-2 mb-4 text-center">
                            <img 
                                width={'100%'} 
                                height={'280px'} 
                                className="rounded" 
                                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} 
                                alt={i.title} 
                            />
                            <h6 className="mt-2">{i.title}</h6>
                            <p className="text-muted small">{i.release_date}</p>
                        </div>
                    ))
                ) : (
                    <div className="text-center w-100">{t.loading || "Загрузка..."}</div>
                )}
            </div>
        </div>
    );
};

export default LatestMovie;