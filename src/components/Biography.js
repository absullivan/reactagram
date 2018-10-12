import { h } from 'preact';
import { connect } from 'preact-redux';
import { toggleFollow } from '../actions';
import Avatar from './Avatar';
import FollowButton from './FollowButton';
import '../css/biography.css';

/** @jsx h */
const Biography = ({ user: { isFollowing, profile }, toggleFollow }) => {

  const { avatar, username, firstname, lastname, description } = profile;

  return (
    <div class="biography">
      <div class="biography__avatar">
        <Avatar src={ avatar } />
      </div>
      <div class="biography__details">
        <h2 class="biography__details__username">{ username }</h2>
        <FollowButton following={ isFollowing } onClick={ toggleFollow } />
        <p class="biography__details__description">A Clone of Reactagram</p>
        <p class="biography__details__description">
          <strong>{ firstname } { lastname }</strong> - { description } - <a href="https://absullivan.cozycloud.cc/public/blog/" target="_blank">https://absullivan.cozycloud.cc/public/blog/</a>
        </p>
      </div>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: () => {
      dispatch(toggleFollow());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Biography);
