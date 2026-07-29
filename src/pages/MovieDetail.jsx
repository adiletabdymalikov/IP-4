import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { translations } from "../translations"

const MovieDetail = () => {
    const [detail, setdetail] = useState()
    const [video, setvideo] = useState()
    const [similar, setsimilar] = useState()
    const [recomendate, setrecomen] = useState()
    
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
    let param = useParams()

    const currentLang = localStorage.getItem('appLang') || 'ru';
    const t = translations[currentLang] || translations.ru;
    const apiLang = `${currentLang}-${currentLang.toUpperCase()}`;

    let deteiF = async () => {
        let detData = await axios({
            url: `https://api.themoviedb.org/3/movie/${param.id}?api_key=${apikey}&language=${apiLang}&page=1`
        })
        if (detData != null && detData.status === 200) {
            setdetail(detData.data)
        }
    }

    let videiF = async () => {
        let videtData = await axios({
            url: `https://api.themoviedb.org/3/movie/${param.id}/videos?api_key=${apikey}&language=${apiLang}`
        })
        if (videtData != null && videtData.status === 200) {
            setvideo(videtData.data.results)
        }
    }

    let similarF = async () => {
        let similarData = await axios({
            url: `https://api.themoviedb.org/3/movie/${param.id}/similar?api_key=${apikey}&language=${apiLang}&page=1`
        })
        if (similarData != null && similarData.status === 200) {
            setsimilar(similarData.data.results)
        }
    }

    let recomen = async () => {
        let recomenData = await axios({
            url: `https://api.themoviedb.org/3/movie/${param.id}/recommendations?api_key=${apikey}&language=${apiLang}&page=1`
        })
        if (recomenData != null && recomenData.status === 200) {
            setrecomen(recomenData.data.results)
        }
    }
 
    useEffect(() => {
        deteiF();
        videiF();
        similarF();
        recomen();
    }, [param.id])

    return (
        <div>
            <div className="col-lg-11 mx-auto text-white">
                <div className="row mt-5">
                    <div className="col-lg-10 px-5">
                        <div className="row">
                            {detail != null ? <>
                                <div className="col-lg-6">
                                    <img width={'90%'} height={'600px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.backdrop_path}`} alt="" />
                                </div>
                                <div className="col-lg-4 text-white"> 
                                    <h4> {detail.title} </h4>
                                    <p>{detail.overview}</p>
                                    <h6>{detail.popularity}</h6>
                                    <h6> {detail.release_date}</h6>
                                    <div>
                                        <h6> {t.productionCompanies || "производственные компании:"} </h6>
                                        {detail.production_companies.map(i => (
                                            <div key={i.id} className="d-flex align-items-center mb-2">
                                                {i.logo_path && (
                                                    <img width={'40px'} className="rounded-5 bg-white p-1 me-2" height={'40px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.logo_path}`} alt="" />
                                                )}
                                                <span> {i.name} </span> 
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </> : <div>{t.loading || "Загрузка..."}</div>}
                        </div> <br /> <br /> <br />

                        {video != null && video.length > 0 ?
                            video.map(i => (
                                <div key={i.key} className="col-lg-12 mb-4">
                                    <iframe width="100%" height="800" src={`https://www.youtube.com/embed/${i.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            )) : null}
                    </div>

                    <div className="col-lg-2 similarblock text-center text-white">
                        <h5>{t.similarMovies || "похожие фильмы"}</h5>
                        {similar != null ?
                            similar.map(i => (
                                <div key={i.id} className="mb-3">
                                    <img width={'100%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />
                                    <a href={"/detail/" + i.id} className="text-info text-decoration-none"><h5>{i.title}</h5></a>
                                    <p>{i.release_date}</p>
                                </div>
                            )) : <div>{t.loading || "loading"}</div>}
                    </div>
                </div> 

                <h4 className="mx-3 my-3 text-white">{t.recommendations || "Рекомендации"}</h4>
                <div className="col-lg-12 scrollHome text-center d-flex overflow-auto">    
                    {recomendate != null ?
                        recomendate.map(i => (
                            <div key={i.id} className="col-6 col-md-4 bg-dark text-white p-2 mx-2 block mt-3 mb-1 col-lg-2 rounded border border-secondary">
                                <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />
                                <a href={"/detail/" + i.id} className="text-info text-decoration-none"><h5>{i.title}</h5></a>  
                                <p>{i.release_date}</p>
                            </div>
                        )) : <div>{t.loading || "loading"}</div>}
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;