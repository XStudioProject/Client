import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DashboardCommonText20 from 'components/atoms/DashboardCommonText20/DashboardCommonText20';

const StyledWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const DashboardEventDetail = ({ icon, title, content }) => {
  const Icon = icon;
  return (
    <StyledWrapper>
      <Icon />
      <StyledTextContainer>
        <DashboardCommonText20>{title}</DashboardCommonText20>
        <DashboardCommonText20 black bold>
          {content}
        </DashboardCommonText20>
      </StyledTextContainer>
    </StyledWrapper>
  );
};

DashboardEventDetail.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default DashboardEventDetail;
