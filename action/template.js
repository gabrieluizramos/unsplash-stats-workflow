const COMMENTS_REGEXP = /(<!-- UNSPLASH-STATS:START -->)((?:.*?\n)+)(<!-- UNSPLASH-STATS:END -->)/g;

const formatter = new Intl.NumberFormat();
const format = number => formatter.format(number);

const STATS_TEMPLATE = ({ downloads, views }) => [
    `- **Views**: ${format(views)}`,
    `- **Downloads**: ${format(downloads)}`,
].join('\n')

const replacer = data => (match, p1, p2, p3, offset, string) => {
    const stats = STATS_TEMPLATE(data);
    return [
        p1,
        stats,
        p3
    ].join('\n');
}

exports.replaceContentByData = (content, data) => {
    const newContent = content.replace(COMMENTS_REGEXP, replacer(data));
    return newContent;
}
