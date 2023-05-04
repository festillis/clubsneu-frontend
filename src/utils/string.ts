export const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isNortheasternEmail = (email: string) => {
  return isEmail(email) && email.endsWith('@northeastern.edu');
};
