import React from 'react';
import styled from 'styled-components';

import PhotoCircle from 'components/atoms/PhotoCircle/PhotoCircle';

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;

  @media (max-width: 1500px) {
    margin-bottom: 16px;
  }
`;

const StyledPhotoCircle = styled(PhotoCircle)`
  position: relative;
  right: 10px;
`;

const MultiCirclePhoto = () => (
  <StyledWrapper>
    <PhotoCircle />
    <StyledPhotoCircle />
  </StyledWrapper>
);

export default MultiCirclePhoto;
