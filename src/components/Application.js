import { h, Component } from 'preact';
import Gallery from './Gallery';
import Biography from './Biography';

/** @jsx h */
class Application extends Component {

  render() {
    return (
      <div className="application">
        <Biography />
        <Gallery />
        <p className="footer">
          Developed by <a href="https://twitter.com/endaquigley" target="_blank">Enda Quigley</a>,
          code available on <a href="https://github.com/endaquigley/reactagram" target="_blank">GitHub</a>
        </p>
      </div>
    );
  }

}

export default Application;
