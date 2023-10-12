const capitalize = (s: string | null | undefined) => {
  if (!s) {
    return null;
  }

  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default capitalize;
