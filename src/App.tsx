import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, People, Starships } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-cente h-screen min-h-[800px] w-full bg-galaxy-img text-white">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center bg-black bg-opacity-75">
          <Header />
          <Routes>
            <Route path="/" element={<People />} />
            <Route path="/starships" element={<Starships />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
