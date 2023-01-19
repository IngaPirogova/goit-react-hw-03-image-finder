import css from './Button.module.css';

export const Button = ({ loadMore }) => {
  return (
    <div>
    <button className={css.Button} type="button" onClick={loadMore}>
      Load more
    </button>
    </div>
  );
};
