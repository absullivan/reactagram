import { h, Component } from 'preact';
import '../css/square-image.css';

/** @jsx h */
class SquareImage extends Component {

  render() {
    return (
      <div className="square-image">
        <img className="square-image__image" src={ this.props.src } alt="Instagram" />
      </div>
    );
  }

}

export default SquareImage;
