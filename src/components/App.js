import { useEffect } from 'react';

import { fetchSmething } from './api';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  useEffect(() => {
    fetchSmething().then().catch();
  }, []);

  return (
    <>
      <GlobalStyle />
    </>
  );
};
