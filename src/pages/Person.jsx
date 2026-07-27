import React, { useState, useEffect } from "react";
import axios from "axios";

const Person = () => {
    const [person, setperson] = useState(null);
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7';

    let personF = async () => {
        let personData = await axios({
            url: `https://api.themoviedb.org/3/person/popular?api_key=${apikey}&language=en-US&page=1`
        });

        if (personData != null && personData.status === 200) {
            setperson(personData.data.results);
        }
    };
    useEffect(() => {
        personF();
    }, []);

    return (
        <div>
            <div className="col-lg-10 mx-auto">
                <div className="row">
                    {person != null ? person.map(i => (
                        <div key={i.id} className="col-md-4 col-lg-2 mx-3 my-4 block">
                            <a href={"/persondetail/" + i.id}>
                                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.profile_path}`} width={'100%'} alt="" />
                                <h5 className="my-2">{i.name}</h5>
                            </a>   
                        </div>
                    )) : <div>loading</div>}
                </div>
            </div>
        </div>
    );
};

export default Person;