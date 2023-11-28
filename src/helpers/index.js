export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(options);
}

export const pagination = (total, limitPage) => {
  return Math.ceil(total / limitPage)
}