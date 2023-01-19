import css from './Button.module.css';

export const Button = ({ loadingMore }) => {
  return (
    <button className={css.Button} type="button" onClick={loadingMore}>
      Load more
    </button>
  );
};
