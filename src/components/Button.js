import { h, Component } from 'preact';
import classNames from 'classnames';
import '../css/standard-button.css';

/** @jsx h */
class Button extends Component {

  render() {
    const classes = classNames('standard-button',
      { 'standard-button--round' : this.props.type === 'round' }
    );
    return (
      <input type="button" className={ classes } value={ this.props.text } onClick={ this.props.onClick } />
    );
  }

}

Button.defaultProps = {
  type: 'normal'
};

export default Button;
