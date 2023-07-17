export const digit = (rate: number) => {
  const rateLength = String(rate.toFixed(0)).length;
  switch (rateLength) {
    case rateLength >= 10 && rateLength <= 12 ? rateLength : true:
      return (rate / 1000000000).toFixed(2) + "B";
    case rateLength >= 6 && rateLength <= 9 ? rateLength : true:
      return (rate / 1000000).toFixed(2) + "M";
    default:
      return rate;
  }
};
