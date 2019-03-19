# Installation

## Direct Download / CDN

https://unpkg.com/tabulated-data/dist/tabulated-data 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/tabulated-data@{{ $version }}/dist/tabulated-data.js
 
Include tabulated-data after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/tabulated-data/dist/tabulated-data.js"></script>
```

## NPM

```sh
$ npm install tabulated-data
```

## Yarn

```sh
$ yarn add tabulated-data
```

When used with a module system, you must explicitly install the `tabulated-data` via `Vue.use()`:

```javascript
import Vue from 'vue'
import tabulated-data from 'tabulated-data'

Vue.use(tabulated-data)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `tabulated-data` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//tabulated-data.git node_modules/tabulated-data
$ cd node_modules/tabulated-data
$ npm install
$ npm run build
```

