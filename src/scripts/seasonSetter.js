const seasonsSetter = (month) => {
  let { spring, summer, fall, winter } = false;
  // eslint-disable-next-line default-case
  switch (month) {
    case 12:
    case 1:
    case 2:
      winter = true;
      break;
    case 3:
    case 4:
    case 5:
      spring = true;
      break;
    case 6:
    case 7:
    case 8:
      summer = true;
      break;
    case 9:
    case 10:
    case 11:
      fall = true;
      break;
  }
  const dictionary = {
    0: "spring",
    1: "summer",
    2: "fall",
    3: "winter",
  };
  const arr = [spring, summer, fall, winter];
  let season = null;
  arr.forEach((elem) => {
    if (elem) {
      season = dictionary[arr.indexOf(elem)];
    }
    return null;
  });
  return season;
};

export default seasonsSetter;
