const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number | undefined,
): number => {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  return rndNumber === exclude
    ? generateRandomBetween(min, max, exclude)
    : rndNumber;
};

export default generateRandomBetween;
