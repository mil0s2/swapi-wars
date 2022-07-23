import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Response, Person, Starship } from 'types';

const useFetchPages = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getPeople = async () => {
      try {
        let personArray: Person[] | Starship[] = [];
        const promises = [];
        const { data }: AxiosResponse<Response> = await axios.get(url + '1');
        const numberOfPages = Math.ceil(data.count / 10);
        for (let i = 2; i <= numberOfPages; i++) {
          promises.push(axios.get(url + i));
        }
        const resp = await Promise.all(promises);
        personArray = resp.reduce(
          (acc, data) => [...acc, ...data.data.results],
          personArray
        );

        setData([...data.results, ...personArray]);
      } catch (err) {
        setError(err);
        console.log('Error:', err);
      }
    };
    getPeople();
  }, [url]);

  return [data, error];
};

export default useFetchPages;
