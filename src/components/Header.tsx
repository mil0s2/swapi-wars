import { NavLink } from 'react-router-dom';

import Score from './Score';

const Header = () => {
  return (
    <div className="w-full bg-black px-6 items-center flex flex-col gap-8">
      <nav className="w-full flex justify-center gap-8 mt-8">
        <NavLink
          to="/"
          className="px-4 py-2 rounded-md"
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : '#fff',
            background: isActive ? 'gray' : '',
          })}
        >
          People
        </NavLink>
        <NavLink
          to="/starships"
          className="px-4 py-2 rounded-md"
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : '#fff',
            background: isActive ? 'gray' : '',
          })}
        >
          Starships
        </NavLink>
      </nav>
      <div className="grid grid-cols-2 w-full">
        <Score name="player 1" score={12} />
        <Score name="player 2" score={7} />
      </div>
    </div>
  );
};

export default Header;
