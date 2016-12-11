import { h } from 'preact';
import classNames from 'classnames';
import '../css/avatar.css';

/** @jsx h */
const Avatar = ({ src, size }) => {

  const classes = classNames('avatar',
    { 'avatar--small': size === 'small' },
    { 'avatar--large': size === 'large' }
  );

  return (
    <img className={ classes } src={ src } alt="avatar" />
  );

}

Avatar.defaultProps = {
  size: 'medium'
};

export default Avatar;
