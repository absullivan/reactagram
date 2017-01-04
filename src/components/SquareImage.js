import { h } from 'preact';
import '../css/square-image.css';

/** @jsx h */
const SquareImage = ({ src }) => {
  return (
    <div class="square-image">
      <img class="square-image__image" src={ src } alt="Instagram" />
    </div>
  );
}

export default SquareImage;
