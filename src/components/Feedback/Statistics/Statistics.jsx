import React from 'react';
import {
  StatisticsWrap,
  StatisticsTitle,
  StatisticsList,
} from './Statistics.styled';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  totalFeedbacks,
  positivePercentage,
}) => {
  return (
    <StatisticsWrap>
      <StatisticsTitle>{title}</StatisticsTitle>
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
