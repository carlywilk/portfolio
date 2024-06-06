import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage.jsx';
import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
