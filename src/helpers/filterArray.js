const filterArray = (val, arr) => {
  if (parseInt(val)) {
    // if number -> find by id or total
    const find = parseInt(val);
    return arr.filter(item => item.id === find);
  } else {
    // if string -> find by userName
    return arr.filter(item =>
      item.userName.toLowerCase().includes(val.toLowerCase()),
    );
  }
};
export default filterArray;
