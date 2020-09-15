import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DashboardTitle from 'components/atoms/DashboardTitle/DashboardTitle';
import CustomerWithPhoto from 'components/atoms/CustomerWithPhoto/CustomerWithPhoto';
import DashboardCommonText20 from 'components/atoms/DashboardCommonText20/DashboardCommonText20';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, activeItem }) =>
    activeItem ? theme.colors.dashboard.calendarActiveBackground : 'none'};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: none;
`;

const StyledGreenLabel = styled.div`
  height: 100%;
  width: 8px;
  background-color: ${({ theme, activeItem }) =>
    activeItem ? theme.colors.dashboard.greenLabel : 'none'};
  margin-right: 24px;
`;

const StyledInformation = styled.div`
  display: flex;
  height: 52%;
  width: auto;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTitle = styled(DashboardTitle)`
  color: ${({ theme }) => theme.colors.dashboard.dashboardTextDark};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: none;
`;

const StyledText = styled(DashboardCommonText20)`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 0px;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLine = styled.span`
  width: 1px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.dashboard.textLine};
  margin: 0 16px;

  @media (max-width: 1500px) {
    height: 16px;
  }
`;

const StyledTimeContainer = styled.div`
  width: auto;
  height: 52%;
  display: flex;
  align-items: flex-start;
  align-self: center;
  margin-right: 32px;
`;

const StyledTimeText = styled(DashboardTitle)`
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: 100%;
  min-width: 1px;
`;

const DashboardCalendarItem = ({
  title,
  customerName,
  customerPhoto,
  phoneNumber,
  paymentMethod,
  eventTime,
  activeItem,
}) => (
  <StyledWrapper activeItem={activeItem}>
    <StyledContent>
      <StyledGreenLabel activeItem={activeItem} />
      <StyledInformation>
        <StyledTitle>{title}</StyledTitle>
        <StyledDetailsContainer>
          <CustomerWithPhoto customerName={customerName} castomerPhoto={customerPhoto} />
          <StyledLine />
          <StyledText>{phoneNumber}</StyledText>
          <StyledLine />
          <StyledText>{paymentMethod}</StyledText>
        </StyledDetailsContainer>
      </StyledInformation>
    </StyledContent>
    <StyledTimeContainer>
      <StyledTimeText>{eventTime}</StyledTimeText>
    </StyledTimeContainer>
  </StyledWrapper>
);

DashboardCalendarItem.propTypes = {
  title: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  customerPhoto: PropTypes.string,
  phoneNumber: PropTypes.string.isRequired,
  paymentMethod: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  activeItem: PropTypes.bool,
};

DashboardCalendarItem.defaultProps = {
  title: 'Makijaz permanentny',
  customerName: 'Joanna Mazur',
  phoneNumber: '+48 211 442 412',
  paymentMethod: 'Gotowka',
  eventTime: '9:00AM - 10:20AM',
};

export default DashboardCalendarItem;
