export const formatMoney = value => {
  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
