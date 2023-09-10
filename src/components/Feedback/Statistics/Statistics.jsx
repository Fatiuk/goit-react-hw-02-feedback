import React from 'react';
import { StatisticsList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <StatisticsList>
      <li>😄 Good: {good}</li>
      <li>😐 Neutral: {neutral}</li>
      <li>😞 Bad: {bad}</li>
    </StatisticsList>
  );
};

export default Statistics;
