const filterArray = (val, arr) => {
  const filterByKey = key =>
    arr.filter(item =>
      item[key].toString().toLowerCase().includes(val.toLowerCase()),
    );

  const handleFindValue = val => {
    if (parseInt(val)) {
      // if number -> find by id or total
      // const find = parseInt(val);
      // return arr.filter(item => item.id === find);
      return filterByKey('id');
    } else {
      // if string -> find by userName
      // return arr.filter(item =>
      //   item.userName.toLowerCase().includes(val.toLowerCase()),
      // );
      return filterByKey('userName');
      // }
    }
  };
  const checkLength = () => handleFindValue(val);
  return checkLength();
};
export default filterArray;
