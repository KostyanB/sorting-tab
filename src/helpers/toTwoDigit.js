const toTwoDigit = val =>
  val.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
export default toTwoDigit;
