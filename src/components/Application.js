import { h } from 'preact';
import Biography from './Biography';
import Gallery from './Gallery';
import Footer from './Footer';

/** @jsx h */
const Application = () => {
  return (
    <div className="application">
      <Biography />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Application;
