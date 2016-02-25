
# element-rect

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Get the bounding rect of an element, optionally relative to a particular parent

## Installation

    $ npm install @f/element-rect

## Usage

```js
var elementRect = require('@f/element-rect')

```

## API

### elementRect(node, offsetParent)

- `node` - The node who's rect you want to get
- `offsetParent` - The parent node you want the offset relative to. Usually `node.offsetParent` (passing `true` is shorthand for this).

**Returns:** The rect `{top, left, width, height}` of `node` relative to `offsetParent` (or absolute, if unspecified).

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/element-rect.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/element-rect
[git-image]: https://img.shields.io/github/tag/micro-js/element-rect.svg?style=flat-square
[git-url]: https://github.com/micro-js/element-rect
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/element-rect.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/element-rect
