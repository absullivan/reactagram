import React from 'react';
import reqwest from 'reqwest';
import Button from './button';
import SquareImage from './square-image';

const instagramUrl = 'https://api.instagram.com/v1/tags/dogs/media/recent?client_id=2617d61fbb324a40803930764e8dfb69';

function replaceUrlParam(url, paramName, paramValue) {
  const pattern = new RegExp('('+paramName+'=).*?(&|$)');
  let newUrl = url;
  if (url.search(pattern)>=0) {
    newUrl = url.replace(pattern,'$1' + paramValue + '$2');
  } else {
    newUrl = newUrl + (newUrl.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
  }
  return newUrl;
};

module.exports = React.createClass({
  getInitialState: function() {
    return {
      media: [],
      pagination: {},
      loading: false
    }
  },
  componentDidMount: function() {
    this.fetchData(instagramUrl);
  },
  fetchData: function(url) {
    this.setState({ loading: true });
    let currentMedia = this.state.media;

    // convert URL to JSONP format...
    url = replaceUrlParam(url, 'count', '9');
    url = replaceUrlParam(url, 'callback', '?');

    const component = this;
    reqwest({
      url: url,
      type: 'jsonp',
      success: function(response) {
        response.data.forEach(function(item) {
          currentMedia.push(item);
        });
        component.setState({
          loading: false,
          media: currentMedia,
          pagination: response.pagination
        });
      }
    });
  },
  loadMore: function() {
    const nextUrl = this.state.pagination.next_url;
    if (nextUrl) {
      this.fetchData(nextUrl);
    }
  },
  render: function() {
    if (this.state.media.length > 0) {
      const mediaElements = this.state.media.map(function(item) {
        return (
          <div key={item.id} className="gallery__item">
            <a href={item.images.standard_resolution.url} target="_blank">
              <SquareImage src={item.images.standard_resolution.url} />
            </a>
          </div>
        );
      });

      let loadMoreElement = null;
      if (this.state.loading === true) {
        loadMoreElement = (
          <Button type="round" text="Loading..." disabled="disabled" />
        );
      } else if (this.state.pagination.next_url) {
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
