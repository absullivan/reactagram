import { h } from 'preact';
import classNames from 'classnames';
import '../css/standard-button.css';

/** @jsx h */
const Button = ({ type, text, onClick, disabled }) => {

  const classes = classNames('standard-button',
    { 'standard-button--round' : type === 'round' }
  );

  return (
    <input type="button" class={ classes } value={ text } onClick={ onClick } disabled={ disabled } />
  );
}

Button.defaultProps = {
  type: 'normal'
};

export default Button;
