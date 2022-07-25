import { useEffect, useState } from 'react';
import shuffleAndDeal from 'src/utils/shuffleAndDeal';
import { IGame, IPlayer } from '../../types';
import Card from './Card';
import Score from './Score';

const initialPlayerState = {
  deck: [],
  score: 0,
  cardNumber: 0,
  cardInfo: { name: '', mass: '' },
  showCard: false,
  active: true,
  win: false,
};

const People = ({ allCards }: IGame) => {
  const [playerOne, setPlayerOne] = useState<IPlayer>(initialPlayerState);
  const [playerTwo, setPlayerTwo] = useState<IPlayer>(initialPlayerState);

  const [draw, setDraw] = useState(false);
  const [winner, setWinner] = useState('');

  const isDeckLoaded = playerOne.deck.length > 0;

  useEffect(() => {
    const [firstHalf, secondHalf] = shuffleAndDeal(allCards);
    setPlayerOne({ ...playerOne, deck: firstHalf });
    setPlayerTwo({ ...playerTwo, deck: secondHalf });
  }, [allCards]);

  useEffect(() => {
    if (
      playerTwo.deck.length > 0 &&
      playerTwo.cardNumber === playerTwo.deck.length
    ) {
      playerOne.score > playerTwo.score
        ? setWinner('PLAYER 1')
        : setWinner('PLAYER 2');
      return;
    }
    if (playerOne.showCard && playerTwo.showCard) {
      setPlayerOne((prev) => {
        return { ...prev, active: false };
      });
      setPlayerTwo((prev) => {
        return { ...prev, active: false };
      });
      const timerShowWinner = setTimeout(() => {
        const playerOneMassNumber = +playerOne.cardInfo.mass;
        const playerTwoMassNumber = +playerTwo.cardInfo.mass;

        if (playerOneMassNumber === playerTwoMassNumber) {
          setDraw(true);
          return;
        }

        playerOneMassNumber > playerTwoMassNumber
          ? setPlayerOne((prev) => {
              return { ...prev, win: true, score: playerOne.score++ };
            })
          : setPlayerTwo((prev) => {
              return { ...prev, win: true, score: playerTwo.score++ };
            });
      }, 1000);
      const timerFlipCards = setTimeout(() => {
        setPlayerOne((prev) => {
          return { ...prev, win: false, showCard: false, active: true };
        });
        setPlayerTwo((prev) => {
          return { ...prev, win: false, showCard: false };
        });
        setDraw(false);
      }, 2000);
      return () => {
        clearTimeout(timerFlipCards);
        clearTimeout(timerShowWinner);
      };
    }
  }, [playerOne.showCard, playerTwo.showCard]);

  return (
    <div className="h-full w-full px-8 py-10">
      <div className="grid h-full min-h-[600px] grid-cols-2 overflow-hidden rounded-lg">
        <div
          className={`${
            draw
              ? 'bg-yellow-300/50'
              : playerOne.win
              ? 'bg-green-300/50'
              : playerOne.active
              ? 'bg-white/40'
              : 'bg-white/20'
          } relative flex w-full flex-col items-center py-6`}
        >
          <Score name="player 1" score={playerOne.score} />
          <Card
            player={playerOne}
            setPlayer={setPlayerOne}
            opponent={playerTwo}
            setOpponent={setPlayerTwo}
            loaded={isDeckLoaded}
          />
        </div>
        <div
          className={`${
            draw
              ? 'bg-yellow-300/50'
              : playerTwo.win
              ? 'bg-green-300/50'
              : playerTwo.active
              ? 'bg-white/40'
              : 'bg-white/20'
          } relative flex w-full flex-col items-center py-6`}
        >
          <Score name="player 2" score={playerTwo.score} />
          <Card
            player={playerTwo}
            opponent={playerOne}
            setPlayer={setPlayerTwo}
            setOpponent={setPlayerOne}
            loaded={isDeckLoaded}
          />
        </div>
      </div>
      {winner && (
        <div className="absolute top-[50%] left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 rounded-lg bg-black/50 px-2 py-6">
          <div className="text-center text-5xl text-green-400">
            {winner + ' WINS'}
          </div>
          <a href="/">
            <button className="text-xl">Reset</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default People;
