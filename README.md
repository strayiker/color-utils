[![Version](https://badgen.net/npm/v/@sadbox/color-utils)](https://www.npmjs.com/package/@sadbox/color-utils) [![License](https://badgen.net/npm/license/@sadbox/color-utils)](https://www.npmjs.com/package/@sadbox/color-utils) [![Dependencies](https://badgen.net/david/dep/strayiker/color-utils)](https://www.npmjs.com/package/@sadbox/color-utils) [![Bundle Size](https://badgen.net/bundlephobia/minzip/@sadbox/color-utils)](https://www.npmjs.com/package/@sadbox/color-utils) [![Build Status](https://travis-ci.com/strayiker/color-utils.svg?branch=master)](https://travis-ci.com/strayiker/color-utils)

# Color Utils

A lightweight set of utility functions for working with colors.
Supported color formats: `#000`, `#0000`, `#000000`, `#00000000`, `rgb()`, `rgba()`, `hsl`, `hsla()`

## Install

`yarn add @sadbox/color-utils`

or

`npm install -S @sadbox/color-utils`

## Usage

```javascript
import { darken } from '@sadbox/color-utils';

const dark = darken('#fff', 0.5); // #808080
```

## Available Utils

- `darken(color, coefficient)`
- `lighten(color, coefficient)`
- `getLuminance(color)`
- `setAlpha(color, alpha)`
