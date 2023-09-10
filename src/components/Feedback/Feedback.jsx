import React, { Component } from 'react';
// ============ Options ============
import Options from './Options/Options';
// ============ Statistics ============
import Statistics from './Statistics/Statistics';

export default class Feedback extends Component {
  state = {
    good: 50,
    neutral: 80,
    bad: 10,
  };

  // A function that counts the total number of votes (feedbacks)
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // A function that counts the total percentage of positive votes (feedbacks)
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    return Math.round((good / totalFeedbacks) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Options options={options}></Options>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedbacks={totalFeedbacks}
          positivePercentage={positivePercentage}
        ></Statistics>
      </>
    );
  }
}
