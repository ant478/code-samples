export const makeMarkdownLink = (link, title = link) => `[${title}](${encodeURI(link)})`;
export const getListing = (...values) => values
  .map((value) => ((value.annotation || '') + value.toString()))
  .join('\n\n');
