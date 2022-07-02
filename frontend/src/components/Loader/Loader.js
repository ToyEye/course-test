import React from 'react';

import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyledContainer } from './LoaderStyled';

const Loader = () => {
  return (
    <LoaderStyledContainer>
      <ThreeDots color="#FF9927" height={80} width={80} />
    </LoaderStyledContainer>
  );
};

export default Loader;
