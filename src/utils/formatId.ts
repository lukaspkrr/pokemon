const formatId = (id: number) => {
  if (String(id).length === 1) {
    return `#00${id}`;
  }
  if (String(id).length === 2) {
    return `#0${id}`;
  }
  return `#${id}`;
};

export default formatId;
