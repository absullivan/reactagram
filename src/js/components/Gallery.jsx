import React from 'react';
import Button from './Button.jsx';
import SquareImage from './SquareImage.jsx';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';

function componentState() {
  return {
    instagramData: AppStore.getInstagramData()
  };
}

export default React.createClass({
  _onChange() {
    this.setState(componentState());
    this.setState({ isLoading: false });
  },

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
    AppActions.loadImages();
  },

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  },

  getInitialState: function() {
    return componentState();
  },

  loadMore: function() {
    AppActions.loadImages();
    this.setState({ isLoading: true });
  },

  render: function() {
    let {isLoading} = this.state;
    let {media, pagination} = this.state.instagramData;

    if (media.length > 0) {
      const mediaElements = media.map(function(item) {
        return (
          <div key={item.id} className="gallery__item">
            <a href={item.images.standard_resolution.url} target="_blank">
              <SquareImage src={item.images.standard_resolution.url} />
            </a>
          </div>
        );
      });

      let loadMoreElement = null;
      if (isLoading) {
        loadMoreElement = (
          <Button type="round" text="Loading..." disabled="disabled" />
        );
      } else if (pagination.next_url) {
        loadMoreElement = (
          <Button type="round" text="Load More" onClick={this.loadMore} />
        );
      };

      return (
        <div className="gallery">
          <div className="gallery__items">
            {mediaElements}
          </div>
          {loadMoreElement}
        </div>
      );

    } else {
      return null;
    }

  }
});
