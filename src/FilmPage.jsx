import axios from "axios";
import { useState, useEffect } from "react";
import Alert from "./components/Alert";
import FilmResult from "./components/FilmResult";
import LoadingSpinner from "./components/LoadingSpinner";

const initComponentState = {
  loading: false,
  error: null,
  films: [],
};

const FilmPage = () => {
  const [state, setState] = useState(initComponentState);

  const fetchFilms = async () => {
    setState({ ...state, loading: true });
    try {
      const { data } = await axios.get("https://swapi.dev/api/films");
      const films = data.results;
      setState({ ...state, films });
    } catch (error) {
      setState({ ...state, error });
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <main className='md:container md:mx-auto md:px-12 px-6'>
      {state.loading && <LoadingSpinner />}
      {state.error && <Alert error={state.error} />}
      <article>
        {state.films.map((film, index) => (
          <FilmResult key={index} {...film} />
        ))}
      </article>
    </main>
  );
};

export default FilmPage;
