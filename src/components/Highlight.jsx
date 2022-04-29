import React from 'react';
import hljs from 'vendor/highlight';
import HighlightScrollbar from 'src/components/HighlightScrollbar';

/**
 * Reused from https://github.com/akiran/react-highlight/blob/master/src/index.js, modified
 */
class Highlight extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setEl = this.setEl.bind(this);
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  setEl(el) {
    this.el = el;
  }

  highlightCode() {
    const nodes = this.el.querySelectorAll('pre code');

    for (let i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render() {
    const { children, className, title } = this.props;

    return (
      <div className="hljs-container">
        {title && <h4 className="hljs-heading">{title}</h4>}
        <div className="hljs-outer">
          <HighlightScrollbar>
            <pre ref={this.setEl}>
              <code className={className}>{children}</code>
            </pre>
          </HighlightScrollbar>
        </div>
      </div>
    );
  }
}

export default Highlight;
