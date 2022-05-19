export const makeMarkdownLink = (link, title = link) => `[${title}](${encodeURI(link)})`;
