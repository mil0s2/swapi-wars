import { Person } from '../../types';

type PeopleProps = {
  data: Person[];
  error: any;
};

const People = ({ data, error }: PeopleProps) => {
  return !error ? (
    <div className="h-full flex items-center">
      <button>
        <div className="border-4 hover:border-yellow-200 active:translate-y-[2px] border-yellow-400 rounded-lg px-12 py-6">
          START
        </div>
      </button>
    </div>
  ) : (
    <div>There was an error</div>
  );
};

export default People;
