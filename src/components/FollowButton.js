import { h, Component } from 'preact';
import Button from './Button';

/** @jsx h */
class FollowButton extends Component {

  render() {
    return (
      <Button text={ this.props.following ? 'Unfollow' : 'Follow' } onClick={ this.props.onClick } />
    )
  }

}

export default FollowButton;
