import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type DateTimeProps = {
  date: string;
  time: string;
};

const DateTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
`;

const StyledText = styled.time`
  color: ${(props) => props.theme.text};
`;

export const ClockComponent = () => {
  const [dateTime, setDateTime] = useState<DateTimeProps>();

  const updateDateTime = () => {
    const setDate = moment().format('D/MM/YYYY');
    const setTime = moment().format('H:mm:ss');

    setDateTime({ date: setDate, time: setTime });
  };

  useEffect(() => {
    updateDateTime();

    setInterval(() => {
      updateDateTime();
    }, 1000);
  }, []);

  return (
    <DateTimeWrapper>
      <StyledText>{dateTime?.time}</StyledText>
      <StyledText>{dateTime?.date}</StyledText>
    </DateTimeWrapper>
  );
};
