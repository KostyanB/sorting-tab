import { useState } from 'react';

const useSetPagesCount = () => {
  const [ pagesCount, setPagesCount ] = useState(0);

  return { pagesCount, setPagesCount }
};
export default useSetPagesCount;