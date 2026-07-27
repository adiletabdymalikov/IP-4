import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const PersonDetail = () => {
    const [person, setperson] = useState(null);
    const [credits, setcredits] = useState(null);
    
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7';
    let param = useParams();

    let personItemF = async () => {
        let personData = await axios({
            url: `https://api.themoviedb.org/3/person/${param.id}?api_key=${apikey}&language=en-US` 
        });
        if (personData != null && personData.status === 200) {
            setperson(personData.data);
        }
    };

    let credisF = async () => {
        let creditsData = await axios({
            url: `https://api.themoviedb.org/3/person/${param.id}/movie_credits?api_key=${apikey}&language=ru-RU`
        }); 
        if (creditsData != null && creditsData.status === 200) {
            setcredits(creditsData.data.cast);
        }
    };

    useEffect(() => {
        personItemF();
        credisF();
    }, []);

    return (
        <div>
           
            {person != null ? (
                <div className="col-11 mx-auto mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <img width={'90%'} height={'480px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${person.profile_path}`} alt="" /> <br /> <br />
                            <b>Дата рождения <br />
                            {person.birthday}</b>
                            <br /> <br />
                            <b>Также известен как</b>
                            {person.also_known_as && person.also_known_as.map((i, index) => (
                                <p key={index}>{i}</p>
                            ))}
                        </div>
                        
                        <div className="col-md-8 my-auto fs-5">
                            <h3>{person.name}</h3>
                            <p>{person.biography}</p>

                            <h3>Известность за</h3>
                            <div className="row scrollHome">
                                {credits != null ? (
                                    credits.map(i => (
                                        <div key={i.id} className="col-6 col-md-5 text-center block my-5 col-lg-3">
                                            <img width={'80%'} height={'300px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" />
                                            <h6>{i.title}</h6>
                                        </div>
                                    ))
                                ) : (
                                    <div>loading</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <br /> <br />
                </div>
            ) : (
                <div>loading</div>
            )}
        </div>
    );
};

export default PersonDetail;