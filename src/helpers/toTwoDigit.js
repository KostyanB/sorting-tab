const toTwoDigit = val => (parseInt(val) <= 9 ? '0' + val : val);
export default toTwoDigit;
