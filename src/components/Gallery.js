import { h } from 'preact';
import { connect } from 'preact-redux';
import { loadMore } from '../actions';
import Button from './Button';
import SquareImage from './SquareImage';
import '../css/gallery.css';

/** @jsx h */
const Gallery = ({ gallery: { images, isLoading }, loadMore }) => {

  const mediaElements = images.map(function(item, index) {
    return (
      <div key={ index } className="gallery__item">
        <a href={ item.url } target="_blank">
          <SquareImage src={ item.url } />
        </a>
      </div>
    );
  });

  const buttonText = (isLoading ? 'Loading...' : 'Load More');

  return (
    <div className="gallery">
      <div className="gallery__items">
        { mediaElements }
      </div>
      <Button type="round" text={ buttonText } disabled={ isLoading } onClick={ loadMore } />
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    gallery: state.gallery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMore: () => {
      dispatch(loadMore());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
