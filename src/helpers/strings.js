export const makeMarkdownLink = (link, title = link) => `[${title}](${encodeURI(link)})`;
export const getListing = (value) => ((value.annotation || '') + value.toString());
