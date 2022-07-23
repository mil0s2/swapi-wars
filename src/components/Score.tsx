type ScoreType = {
  name: string;
  score: number;
};

const Score = ({ name, score }: ScoreType) => {
  return (
    <div className="flex flex-col items-center uppercase text-2xl">
      <div>
        {name}
        <div>SCORE: {score}</div>
      </div>
    </div>
  );
};

export default Score;
