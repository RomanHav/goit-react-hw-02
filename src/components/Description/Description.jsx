import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={css.descrinfo}>
      <h1 className={css.descrtitle}>Sip Happens Café</h1>
      <p className={css.descr}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
