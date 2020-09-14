import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DashboardTitle from 'components/atoms/DashboardTitle/DashboardTitle';
import DashboardCommonText20 from 'components/atoms/DashboardCommonText20/DashboardCommonText20';
import MultiCirclePhoto from 'components/molecules/MultiCirclePhoto/MultiCirclePhoto';
import DashboardEventDetail from 'components/molecules/DashboardEventDetail/DashboardEventDetail';

import ButtonV1 from 'components/atoms/ButtonV1/ButtonV1';

// Icons
import { ReactComponent as DashboardCalendarIcon } from 'assets/images/eventcontainer/dashboard-calendar.svg';
import { ReactComponent as DashboardWatchIcon } from 'assets/images/eventcontainer/dashboard-watch.svg';
import { ReactComponent as DashboardTimeIcon } from 'assets/images/eventcontainer/dashboard-time.svg';
import { ReactComponent as DashboardCostIcon } from 'assets/images/eventcontainer/dashboard-cost.svg';
import { ReactComponent as DashboardCardIcon } from 'assets/images/eventcontainer/dashboard-card.svg';

const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.general.white};
  border: ${({ theme }) => `1px solid ${theme.colors.dashboard.dashboardElementBorder}`};
  box-shadow: ${({ theme }) => `20px 20px 30px ${theme.colors.dashboard.shadow}`};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 28px 32px;
`;

const StyledDashboardTitle = styled(DashboardTitle)`
  margin-bottom: 8px;
`;

const StyledDescription = styled(DashboardCommonText20)`
  margin-bottom: 24px;
`;

const StyledParticipants = styled(DashboardCommonText20)`
  margin-bottom: 8px;
`;

const StyledTransparentButtonV1 = styled(ButtonV1)`
  background: none;
  box-shadow: none;
  border: none;
`;

const DashboardEventContainer = ({ className }) => {
  const [details] = useState([
    { icon: DashboardCalendarIcon, title: 'Data', content: '11 Marca, 2020' },
    { icon: DashboardWatchIcon, title: 'Godziny', content: '9:00 - 10:20' },
    { icon: DashboardTimeIcon, title: 'Czas trwania', content: '120 min' },
    { icon: DashboardCostIcon, title: 'Koszt', content: '120.00 PLN' },
    { icon: DashboardCardIcon, title: 'Sposób zapłaty', content: 'Przedpłata' },
  ]);

  return (
    <StyledWrapper className={className}>
      <DashboardTitle>NAJBLIZSZE WYDARZENIE</DashboardTitle>
      <StyledDashboardTitle big>Stylizacja rzes 3:1</StyledDashboardTitle>
      <StyledDescription>
        Nulla pariatur voluptate ea qui exercitation proident sit sit reprehenderit laboris ex
        fugiat.
      </StyledDescription>
      <StyledParticipants initialCase>Uczestnicy: </StyledParticipants>
      <MultiCirclePhoto />
      {details.map(({ icon, title, content }) => (
        <DashboardEventDetail key={title} icon={icon} title={title} content={content} />
      ))}
      <ButtonV1 green name="Rozpocznij wizyte" />
      <StyledTransparentButtonV1 name="Anuluj wizyte" />
    </StyledWrapper>
  );
};

DashboardEventContainer.propTypes = {
  className: PropTypes.elementType,
};

export default DashboardEventContainer;
