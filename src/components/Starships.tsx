import useFetchPages from 'src/hooks/useFetch';
import Game from './Game';

const starshipsURL = 'https://swapi.dev/api/starships/?page=';

const Starships = () => {
  const starships = useFetchPages(starshipsURL);

  return (
    <Game
      allCards={starships}
      cardImgBlue="bg-ship-blue"
      cardImgRed="bg-ship-red"
      resetHref="/starships"
    />
  );
};

export default Starships;
