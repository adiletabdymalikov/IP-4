import React, { useState, useEffect } from "react";
import axios from 'axios';

const Top = () => {
    const [movie1, setmovie1] = useState(null);
    const [movie, setmovie] = useState(null);
    const [state, setsate] = useState(false);

    let movieF1 = async () => {
        let movieData = await axios({
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=en-US&page=1`,
            method: "get"
        });
        if (movieData != null && movieData.status === 200) {
            setmovie1(movieData.data.results);
        }
    };

    let movieF = async (el) => {
        let movieData = await axios({
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=${el}`,
            method: "get"
        });
        if (movieData != null && movieData.status === 200) {
            setmovie(movieData.data.results);
            setsate(true);
        }
    };

    useEffect(() => {
        movieF1();
    }, []);

    return (
        <div>
         
            <div data-aos="zoom-out" className="col-6 mt-5 text-center mx-auto">
                <button onClick={() => movieF(2)} className='btn btn-outline-primary mx-3'>2</button>
                <button onClick={() => movieF(3)} className='btn btn-outline-primary mx-3'>3</button>
                <button onClick={() => movieF(4)} className='btn btn-outline-primary mx-3'>4</button>
                <button onClick={() => movieF(5)} className='btn btn-outline-primary mx-3'>5</button>
                <button onClick={() => movieF(6)} className='btn btn-outline-primary mx-3'>6</button>
                <button onClick={() => movieF(7)} className='btn btn-outline-primary mx-3'>7</button>
            </div>
           
            <div className="col-12">
                {state ? (
                    <div className="col-lg-11 text-center mx-auto">
                        <div className="row">
                            {movie != null ?
                                movie.map(i =>
                                    <div key={i.id} data-aos="zoom-out" className="col-6 col-md-4 block my-5 col-lg-2">
                                        <img width={'80%'} height={'300px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" />
                                        <h6>{i.title}</h6>
                                    </div>
                                ) : <>loading</>}
                        </div>
                    </div>
                ) : (
                    <div data-aos="zoom-out" className="col-lg-11 text-center mx-auto">
                        <div className="row">
                            {movie1 != null ?
                                movie1.map(i =>
                                    <div key={i.id} className="col-6 block col-md-4 my-5 col-lg-2">
                                        <img width={'80%'} height={'300px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />
                                        <h6>{i.title}</h6>
                                    </div>
                                ) : <>loading</>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Top;