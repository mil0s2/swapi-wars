import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { IResponse, Person, Starship } from 'types';

const useFetchPages = (url: string) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getPeople = async () => {
      try {
        let dataArray: Person[] | Starship[] = [];
        const promises = [];
        const { data: fristPageData }: AxiosResponse<IResponse> =
          await axios.get(url + '1');
        const numberOfPages = Math.ceil(fristPageData.count / 10);
        for (let i = 2; i <= numberOfPages; i++) {
          promises.push(axios.get(url + i));
        }
        const response = await Promise.all(promises);
        dataArray = response.reduce(
          (acc, data) => [...acc, ...data.data.results],
          dataArray
        );

        setData([...fristPageData.results, ...dataArray]);
      } catch (err) {
        console.log('Error:', err);
      }
    };
    getPeople();
  }, [url]);

  return data;
};

export default useFetchPages;
