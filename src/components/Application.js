import { h, Component } from 'preact';
import Biography from './Biography';
import Gallery from './Gallery';
import Footer from './Footer';

/** @jsx h */
class Application extends Component {

  render() {
    return (
      <div className="application">
        <Biography />
        <Gallery />
        <Footer />
      </div>
    );
  }

}

export default Application;
