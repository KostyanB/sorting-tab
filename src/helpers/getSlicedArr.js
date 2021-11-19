const getSlicedArr = (page, rowsCount, arr) => {
    const firstIndex = (page - 1) * rowsCount;
    const lastIndex = page * rowsCount;
    const slicedArr = arr.slice(firstIndex, lastIndex);
    return slicedArr;
};
export default getSlicedArr;