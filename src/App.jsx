import { useState, useEffect } from "react";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";

const App = () => {
  const [items, setItems] = useState(() => {
    const feedbackSave = localStorage.getItem("items");
    if (feedbackSave !== null) {
      return JSON.parse(feedbackSave);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (type) => {
    setItems({
      ...items,
      [type]: items[type] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleReset() {
    setItems({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const totalFeedback = items.good + items.neutral + items.bad;

  const positiveFeedback = Math.round((items.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        update={updateFeedback}
        option={totalFeedback}
        reset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          items={items}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
