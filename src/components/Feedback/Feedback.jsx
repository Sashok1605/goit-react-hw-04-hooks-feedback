import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/';
import Section from '../Section/';
import Statistics from '../Statistics/';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleInc = event => {
    const name = event.target.name;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        return;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        return;
      case 'bad':
        setBad(prevState => prevState + 1);
        return;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = Math.round((good / countTotalFeedback()) * 100);
    return result;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions handleInc={handleInc} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <p>No feedback given</p>
        )}
      </Section>
    </>
  );
};

export default Feedback;
