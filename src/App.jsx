import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage.jsx';
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage.jsx";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
