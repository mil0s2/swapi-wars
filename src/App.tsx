import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, People } from './components';
import useFetchPages from './hooks/useFetch';

const peopleURL = 'https://swapi.dev/api/people/?page=';
const starshipsURL = 'https://swapi.dev/api/starships/?page=';

const App = () => {
  const [people, errPeople] = useFetchPages(peopleURL);
  const [starships, errStarships] = useFetchPages(starshipsURL);

  return (
    <BrowserRouter>
      <div className="w-full bg-galaxy-img bg-cente text-white">
        <div className="max-w-7xl mx-auto bg-opacity-75 flex flex-col items-center bg-black h-screen">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<People data={people} error={errPeople} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
