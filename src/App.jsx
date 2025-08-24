import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { HomePage } from './pages/HomePage/HomePage.jsx';
// import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";
import { Construction } from './pages/Construction/Construction.jsx';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/" element={<Construction />} />
        <Route path="*" element={<Construction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
