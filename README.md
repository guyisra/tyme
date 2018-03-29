# Tyme
> Converting any time unit to any time unit

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Sometimes you want to convert hours to seconds. Something you want to know how many
weeks are in a decade. And sometimes, you want to know how many blinks of an eye are in a day...

## Installation


```sh
npm install tyme --save
```

## Usage example

```javascript
const tyme = require('tyme')
tyme.hours(5).inSeconds() // 18000
tyme.decades(1).inWeeks() // 521.4285714285714 
```

Also exposes the timeunit methods directly

```javascript
const {hours, minutes} = require('tyme')
hours(3).inDays() // 0.125
minutes(60).inHours() // 1
```

## Supported Time Units

|Name|Symbol|Value|
|----|----|----|
|millisecond|ms|0.001s||hectosecond|hs|1m + 40s|
|killosecond|ks|16m + 40s|
|megasecond|Ms|11d + 13h + 46m + 40s|
|gigasecond|Gs|31Y + 287d|
|terasecond|Ts|31600Y|
|second|s|1s|
|minute|m|60s|
|hour|h|60m|
|day|d|24h|
|week|w|7d|
|month|M|31d|
|year|Y|365d|
|decade|D|10Y|


## Development setup


```sh
yarn install 
yarn test
```

## Release History

see changelog.md

## Meta

Guy Israeli – [@isguyra](https://twitter.com/isguyra)

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/guyisra/tyme](https://github.com/guyisra/tyme)

## Contributing

1. Fork it (<https://github.com/guyisra/tyme>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/tyme.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tyme
[npm-downloads]: https://img.shields.io/npm/dm/tyme.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/guyisra/tyme/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/guyisra/tyme