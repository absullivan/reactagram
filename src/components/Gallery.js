import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Button from './Button';
import SquareImage from './SquareImage';
import '../css/gallery.css';

/** @jsx h */
class Gallery extends Component {

  loadMore() {
    this.props.dispatch({
      type: 'LOAD_MORE'
    });
  }

  render() {

    const { images } = this.props.gallery;

    const mediaElements = images.map(function(item, index) {
      return (
        <div key={ index } className="gallery__item">
          <a href={ item.url } target="_blank">
            <SquareImage src={ item.url } />
          </a>
        </div>
      );
    });

    return (
      <div className="gallery">
        <div className="gallery__items">
          { mediaElements }
        </div>
        <Button type="round" text="Load More" onClick={ this.loadMore.bind(this) } />
      </div>
    );

  }

}

function mapStateToProps(state) {
  return {
    gallery: state.gallery
  }
}

export default connect(mapStateToProps)(Gallery);
