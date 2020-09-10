import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DashboardCommonText20 from 'components/atoms/DashboardCommonText20/DashboardCommonText20';

import TestPhoto from 'assets/images/eclipse-account.png';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
`;

const StyledPhoto = styled.img`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  margin-right: 8px;
`;

const StyledName = styled(DashboardCommonText20)`
  text-transform: capitalize;
`;

const CustomerWithPhoto = ({ customerName, customerPhoto }) => (
  <StyledWrapper>
    <StyledPhoto alt="customer photo" src={customerPhoto} />
    <StyledName>{customerName}</StyledName>
  </StyledWrapper>
);

CustomerWithPhoto.propTypes = {
  customerName: PropTypes.string.isRequired,
  customerPhoto: PropTypes.string,
};

CustomerWithPhoto.defaultProps = {
  customerName: 'Joanna Mazur',
  customerPhoto: TestPhoto,
};

export default CustomerWithPhoto;
