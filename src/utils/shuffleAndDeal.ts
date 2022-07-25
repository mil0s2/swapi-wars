const shuffleAndDeal = (data: any[]) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }

  const middleIndex = Math.ceil(data.length / 2);

  const firstHalf = data.splice(0, middleIndex);
  const secondHalf = data.splice(-middleIndex);

  return [firstHalf, secondHalf];
};

export default shuffleAndDeal;
