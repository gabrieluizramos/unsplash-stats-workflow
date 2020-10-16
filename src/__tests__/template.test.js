const { replaceContentByData } = require('../template');

const config = require('../config');

const content = `
# Anything
<!-- UNSPLASH-STATS:START -->
<!-- UNSPLASH-STATS:END -->
`;

const data = {
  downloads: 123,
  views: 321
};

it('Format list', () => {
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

it('Format table', () => {
  config.template = 'table';

  expect(replaceContentByData(content, data)).toMatchInlineSnapshot(`
    "
    # Anything
    <!-- UNSPLASH-STATS:START -->
    | **Views**         | **Downloads**        |
    |:-----------------:|:--------------------:|
    |321   | 123 |
    <!-- UNSPLASH-STATS:END -->
    "
  `);
});
