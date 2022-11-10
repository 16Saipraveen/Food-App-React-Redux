import classes from './Card.module.scss';

export const Card = props => {
  return <div data-testid='card' className={classes.card}>{props.children}</div>
};