import { h, Component } from 'preact';
import classNames from 'classnames';
import '../css/avatar.css';

/** @jsx h */
class Avatar extends Component {

  render() {
    const classes = classNames('avatar',
      { 'avatar--small': this.props.size === 'small' },
      { 'avatar--large': this.props.size === 'large' }
    );
    return (
      <img className={ classes } src={ this.props.src } alt="avatar" />
    );
  }

}

Avatar.defaultProps = {
  size: 'medium'
};

export default Avatar;
