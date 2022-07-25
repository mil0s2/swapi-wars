import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, People } from './components';
import useFetchPages from './hooks/useFetch';

const peopleURL = 'https://swapi.dev/api/people/?page=';
const starshipsURL = 'https://swapi.dev/api/starships/?page=';

const App = () => {
  const people = useFetchPages(peopleURL);
  // const starships = useFetchPages(starshipsURL);

  return (
    <BrowserRouter>
      <div className="bg-cente h-screen min-h-[800px] w-full bg-galaxy-img text-white">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center bg-black bg-opacity-75">
          <Header />
          <Routes>
            <Route path="/" element={<People peopleArray={people} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
