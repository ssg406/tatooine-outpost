import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import SearchPage from "./SearchPage";
import FilmPage from "./FilmPage";

const App = () => {
  return (
    // Set up route paths under '/' and what will render in <Outlet />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<SearchPage />} />
          <Route path='films' element={<FilmPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
