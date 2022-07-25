import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex w-full flex-col items-center bg-black px-6">
      <nav className="mt-8 flex w-full justify-center gap-8">
        <NavLink
          to="/"
          className="rounded-md px-4 py-2"
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : '#fff',
            background: isActive ? 'gray' : '',
          })}
        >
          People
        </NavLink>
        <NavLink
          to="/starships"
          className="rounded-md px-4 py-2"
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : '#fff',
            background: isActive ? 'gray' : '',
          })}
        >
          Starships
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
