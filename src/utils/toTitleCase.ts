export const toTitleCase = (str: string): string => {
  return str.toString().replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};
