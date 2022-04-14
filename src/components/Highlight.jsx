/* eslint-disable */
import React from 'react';
import hljs from 'vendor/highlight';
import HighlightScrollbar from 'src/components/HighlightScrollbar';

/**
 * Reuse from https://github.com/akiran/react-highlight/blob/master/src/index.js
 */
class Highlight extends React.Component {
  constructor(props) {
    super(props)
    this.setEl = this.setEl.bind(this)
  }
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const nodes = this.el.querySelectorAll('pre code');

    for (let i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i])
    }
  }

  setEl(el) {
    this.el = el;
  };

  render() {
    const { children, className } = this.props;
    const props = { ref: this.setEl, className };

    return (
      <div className="hljs-outer">
        <HighlightScrollbar>
          <pre ref={this.setEl}>
            <code className={className}>{children}</code>
          </pre>
        </HighlightScrollbar>
      </div>
    );
  }
}

Highlight.defaultProps = {
  className: null,
};

export default Highlight;
