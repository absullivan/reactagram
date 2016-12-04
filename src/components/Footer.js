import { h, Component } from 'preact';
import '../css/footer.css';

/** @jsx h */
class Footer extends Component {

  render() {
    return (
      <p className="footer">
        Developed by <a href="https://twitter.com/endaquigley" target="_blank">Enda Quigley</a>,
        code available on <a href="https://github.com/endaquigley/reactagram" target="_blank">GitHub</a>
      </p>
    );
  }

}

export default Footer;
