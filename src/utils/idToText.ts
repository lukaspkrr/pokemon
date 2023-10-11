const idToText = (number: number) => {
  if (String(number).length === 1) {
    return `#00${number}`;
  }
  if (String(number).length === 2) {
    return `#0${number}`;
  }
  return `#${number}`;
};

export default idToText;
