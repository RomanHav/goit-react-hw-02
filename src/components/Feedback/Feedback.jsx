import css from "./Feedback.module.css";

export default function Feedback({ items, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.feedback}>
      <h2 className={css.feedbacktitle}>Feedback</h2>
      <p className={css.feedbackitem}>Good: {items.good}</p>
      <p className={css.feedbackitem}>Neutral: {items.neutral}</p>
      <p className={css.feedbackitem}>Bad: {items.bad}</p>
      <p className={css.feedbackitem}>Total: {totalFeedback}</p>
      <p className={css.feedbackitem}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
