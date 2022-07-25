type ScoreType = {
  name: string;
  score: number;
};

const Score = ({ name, score }: ScoreType) => {
  return (
    <div className="flex flex-col gap-4 text-2xl uppercase">
      {name}
      <div>
        SCORE: <span className="text-yellow-300">{score}</span>
      </div>
    </div>
  );
};

export default Score;
