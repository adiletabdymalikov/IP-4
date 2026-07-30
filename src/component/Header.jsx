import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { translations } from "../translations";

const Header = () => {
  const [inp, setSearch] = useState('');
  const [searchstate, setSearchState] = useState(null);
  const [moviSearch, setmovirSearch] = useState([]);
  const [personSearch, setPersonSearch] = useState([]);

  const currentLang = localStorage.getItem('appLang') || 'ru';
  const t = translations[currentLang] || translations.ru;
  const apiLang = `${currentLang}-${currentLang.toUpperCase()}`;

  const searchF = async (queryText) => {
    if (!queryText.trim()) {
      setSearchState(null);
      setmovirSearch([]);
      setPersonSearch([]);
      return;
    }

    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7';
    try {
      let seacrData = await axios({
        url: `https://api.themoviedb.org/3/search/multi?api_key=${apikey}&language=${apiLang}&query=${queryText}&page=1&include_adult=false`
      });

      if (seacrData != null && seacrData.status === 200) {
        const results = seacrData.data.results;
        setSearchState(results);
        
        let movie = results.filter(i => i.media_type === 'movie');
        setmovirSearch(movie);

        let person = results.filter(i => i.media_type === 'person');
        setPersonSearch(person);
      }
    } catch (error) {
      console.error("Ошибка при поиске:", error);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    searchF(value);
  };

  return (
    <div>
      <Navbar data-aos="zoom-out" style={{ "background": "#0d253f" }} expand="lg">
        <Container>
          <Navbar.Brand style={{ "color": "white" }} href="/">
            <h4>TMDB</h4>
          </Navbar.Brand>

          <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link style={{ "color": "white" }} href="/">
                <h5>{t.home}</h5>
              </Nav.Link>
              <Nav.Link style={{ "color": "white" }} href="/popular">
                <h5>{t.popular}</h5>
              </Nav.Link>
              <Nav.Link style={{ "color": "white" }} href="/top">
                <h5>{t.topRated}</h5>
              </Nav.Link>
              <Nav.Link style={{ "color": "white" }} href="/person">
                <h5>{t.people}</h5>
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder={t.searchPlaceholder}
                className="me-2"
                aria-label="Search"
                value={inp}
                onChange={handleSearchChange}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {searchstate != null && (
        <div className="col-lg-12 seacrh bg-dark text-white p-3">
          {personSearch.length > 0 && personSearch.map(item => (
            <h6 key={item.id} className='my-3'>
              <i className="fa-solid fa-user mx-3"></i> 
              <a href={"/persondetail/" + item.id} className="text-info text-decoration-none"> {item.name} </a>
            </h6>
          ))}
          {moviSearch.length > 0 && moviSearch.map(i => (
            <h6 key={i.id} className='my-3'>
              <i className="mx-3 fa-solid fa-video"></i> 
              <a href={"/detail/" + i.id} className="text-warning text-decoration-none">{i.title}</a>
            </h6>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;