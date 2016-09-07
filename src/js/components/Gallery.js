import React, { Component } from 'react';
import Button from './Button';
import SquareImage from './SquareImage';

class Gallery extends Component {

  loadMore() {
    this.props.store.dispatch({
      type: 'LOAD_MORE'
    });
  }

  render() {

    const state = this.props.store.getState();
    const { images } = state.gallery;

    const mediaElements = images.map(function(item) {
      return (
        <div key={ item.id } className="gallery__item">
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

export default Gallery;
