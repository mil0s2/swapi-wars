import React from 'react';
import { IPlayer } from '../../types';

interface CardProps {
  player: IPlayer;
  opponent: IPlayer;
  setPlayer: React.Dispatch<React.SetStateAction<IPlayer>>;
  setOpponent: React.Dispatch<React.SetStateAction<IPlayer>>;
  loaded?: boolean;
  cardImg: string;
}

const Card = ({
  player,
  setPlayer,
  opponent,
  setOpponent,
  loaded,
  cardImg,
}: CardProps) => {
  const flipCard = (
    setPlayer: React.Dispatch<React.SetStateAction<IPlayer>>,
    setOpponent: React.Dispatch<React.SetStateAction<IPlayer>>,
    opponent: IPlayer
  ) => {
    setPlayer((prev: IPlayer) => {
      const { deck, cardNumber } = prev;
      return {
        ...prev,
        active: false,
        cardNumber: prev.cardNumber + 1,
        showCard: true,
        cardInfo: {
          name: deck[cardNumber].name,
          value: deck[cardNumber].mass
            ? deck[cardNumber].mass === 'unknown'
              ? '50'
              : deck[cardNumber].mass
            : deck[cardNumber].crew === 'unknown'
            ? '50'
            : deck[cardNumber].crew,
        },
      };
    });

    if (opponent.showCard) return;
    setOpponent((prev: IPlayer) => {
      return { ...prev, active: true };
    });
  };

  return (
    <div className="flex h-full flex-col justify-center">
      {player.active && (
        <div className="absolute top-[60%] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <button
            disabled={!loaded}
            onClick={() => flipCard(setPlayer, setOpponent, opponent)}
            className={`${
              loaded ? 'active:translate-y-1' : ''
            } rounded-md border-4 border-yellow-400 bg-white/[15%] px-6 py-4 uppercase shadow-md hover:border-yellow-300 hover:bg-white/25`}
          >
            {loaded ? 'show card' : 'Loading...'}
          </button>
        </div>
      )}
      <div className="relative h-[448px] w-[300px]">
        <div
          className={`${
            player.showCard ? 'rotate-y-90' : ''
          } absolute h-full w-full rounded-lg bg-card-revers bg-contain transition-all duration-200 ease-in`}
        />

        <div
          className={`${
            player.showCard ? 'rotate-y-0' : 'rotate-y-90'
          } ${cardImg} absolute h-full w-full overflow-hidden rounded-lg border-4 border-cyan-300 bg-cover bg-no-repeat transition-all delay-200 ease-in`}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-14 bg-black/60 px-4">
            <div className="text-center text-xl">{player.cardInfo.name}</div>
            <div className="text-6xl text-yellow-300">
              {player.cardInfo.value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
