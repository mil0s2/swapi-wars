import useFetchPages from 'src/hooks/useFetch';
import Game from './Game';

const peopleURL = 'https://swapi.dev/api/people/?page=';

const People = () => {
  const people = useFetchPages(peopleURL);

  return (
    <Game
      allCards={people}
      cardImgBlue="bg-lightsaber-blue"
      cardImgRed="bg-lightsaber-red"
      resetHref="/"
    />
  );
};

export default People;
