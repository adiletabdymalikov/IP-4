import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./component/Header";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import MovieDetail from "./pages/MovieDetail";
import Latest from "./pages/Latest";
import Top from "./pages/Top";
import Person from "./pages/Person";
import PersonDetail from "./pages/PersonDetail";
import Lang from "./pages/Lang";
function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/top" element={<Top />} />
        <Route path="/person" element={<Person />} />
        <Route path="/persondetail/:id" element={<PersonDetail />} />

        <Route path="/lang" element={<Lang />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;