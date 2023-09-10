import React from 'react';
import { StatisticsWrap, StatisticsList } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positivePercentage,
}) => {
  return (
    <StatisticsWrap>
      <StatisticsList>
        <li>😄 Good: {good}</li>
        <li>😐 Neutral: {neutral}</li>
        <li>😞 Bad: {bad}</li>
      </StatisticsList>
      <p>Total feedbacks: {totalFeedbacks} units</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </StatisticsWrap>
  );
};

export default Statistics;
