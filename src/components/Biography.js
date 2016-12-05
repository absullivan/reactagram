import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { toggleFollow } from '../actions';
import Avatar from './Avatar';
import FollowButton from './FollowButton';
import '../css/biography.css';

/** @jsx h */
class Biography extends Component {
  render() {

    const { isFollowing } = this.props.user;
    const { avatar, username, firstname, lastname, description } = this.props.user.profile;

    return (
      <div className="biography">
        <div className="biography__avatar">
          <Avatar src={ avatar } />
        </div>
        <div className="biography__details">
          <h2 className="biography__details__username">{ username }</h2>
          <FollowButton following={ isFollowing } onClick={ this.props.toggleFollow } />
          <p className="biography__details__description">Preact / Redux application using the Instagram API</p>
          <p className="biography__details__description">
            <strong>{ firstname } { lastname }</strong> - { description } - <a href="https://www.endaquigley.com" target="_blank">www.endaquigley.com</a>
          </p>
        </div>
      </div>
    );
  }
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
