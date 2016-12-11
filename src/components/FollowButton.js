import { h } from 'preact';
import Button from './Button';

/** @jsx h */
const FollowButton = ({ following, onClick }) => {
  return (
    <Button text={ following ? 'Unfollow' : 'Follow' } onClick={ onClick } />
  )
}

export default FollowButton;
