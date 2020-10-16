const { replaceContentByData } = require('../template');

const content = `
# Anything
<!-- UNSPLASH-STATS:START -->
<!-- UNSPLASH-STATS:END -->
`;

const data = {
  downloads: 123,
  views: 321
};

it('Format conten with data', () => {
  expect(replaceContentByData(content, data)).toMatchInlineSnapshot(`
    "
    # Anything
    <!-- UNSPLASH-STATS:START -->
    - **Views**: 321
    - **Downloads**: 123
    <!-- UNSPLASH-STATS:END -->
    "
  `);
});
