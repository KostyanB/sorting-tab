const filterArray = (val, arr) => {
  const filterByKey = key =>
    arr.filter(item =>
      item[key].toString().toLowerCase().includes(val.toLowerCase()),
    );

  if (parseInt(val)) {
    return filterByKey('id');
  } else {
    return filterByKey('userName');
  }
};
export default filterArray;
