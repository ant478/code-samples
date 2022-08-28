import highlight from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('xml', xml);
highlight.registerLanguage('css', css);

export default highlight;
