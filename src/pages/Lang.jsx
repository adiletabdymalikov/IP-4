import axios from 'axios';
import { useEffect, useState } from 'react';
import { translations } from "../translations";

const Lang = () => {
    const [languages, setLanguages] = useState([]);
    const currentLang = localStorage.getItem('appLang') || 'ru';
    const t = translations[currentLang] || translations.ru;

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7';
                const { data } = await axios.get(`https://api.themoviedb.org/3/configuration/languages?api_key=${apikey}`);
                setLanguages(data);
            } catch (error) {
                console.error("Ошибка при загрузке языков:", error);
            }
        };
        fetchLanguages();
    }, []);

    const changeLanguage = (langCode) => {
        localStorage.setItem('appLang', langCode);
        window.location.reload(); 
    };

    return (
        <div className="container mt-5 text-white text-center">
            <h2>{t.selectLangTitle || "Выберите язык интерфейса"}</h2>
            <div className="alert alert-success mt-3 d-inline-block px-4" role="alert">
                Текущий язык: <strong>{currentLang.toUpperCase()}</strong>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-2 mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {languages.map((lang) => (
                    <button 
                        key={lang.iso_639_1}
                        className={`btn ${currentLang === lang.iso_639_1 ? 'btn-primary' : 'btn-secondary'} m-1`}
                        onClick={() => changeLanguage(lang.iso_639_1)}
                    >
                        {lang.english_name} ({lang.iso_639_1})
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Lang;