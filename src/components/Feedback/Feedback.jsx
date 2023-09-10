import React, { Component } from 'react';
// ============ Options ============
import Options from './Options/Options';
// ============ Statistics ============
import Statistics from './Statistics/Statistics';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <Options options={options}></Options>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </>
    );
  }
}
