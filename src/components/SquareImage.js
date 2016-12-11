import { h } from 'preact';
import '../css/square-image.css';

/** @jsx h */
const SquareImage = ({ src }) => {
  return (
    <div className="square-image">
      <img className="square-image__image" src={ src } alt="Instagram" />
    </div>
  );
}

export default SquareImage;
