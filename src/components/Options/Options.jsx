import css from "./Options.module.css";

export default function Options({ update, option, reset }) {
  return (
    <div className={css.btncontainer}>
      <button
        className={css.button}
        type="button"
        onClick={() => update("good")}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => update("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => update("bad")}
      >
        Bad
      </button>
      {option > 0 ? (
        <button className={css.button} type="button" onClick={reset}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
