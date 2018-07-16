# Rollup + Babel + React Browser Lib
This is a starter pack for building **maintanable** browser library with 
* [rollup](https://github.com/rollup/rollup) building browser compatible `.js` lib
* [Babel](https://github.com/babel/babel)
* [React](https://github.com/facebook/react)

## Use Cases
* **Image previewer**: Where you can trigger a complex image previewer with a particular class name or selector
* **Image Editor**: Complex image editor where including the distributed `.js` does the trick, like the libraries created with JQuery
* **And So On**

## Babel Plugins Supported 
Currently supports the below babel plugin
* [async/await](https://www.npmjs.com/package/babel-plugin-transform-async-to-generator)
* [spread...rest](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread)
* You can add more in `.babelrc`

## Styles 
* Supports `scss`

**Note** Make sure to isolate your styles under a particular class name like the `LibraryName` to not conflict with parent caller. If you want to make use of external scss, use `@import` directive like so 

```scss
.libraryName {
   // external 
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
  ... custom styles
}
```

### Dev server

```
npm run dev
```

To run dev server in watch mode. Which builds in `/dist` directory. Open `index.html` in your browser to see it in action

## Build

```
npm run build
```

```html
...
  <script src="dist/library.js"></script>
...

<script>
  function success (param){
    alert('Done with success, check console');
    console.log(param)
  }

  new LibraryName('.btn', success);
</script>
```

## Build Config

* Library name can be updated in [rollup.config.js](rollup.config.js), `moduleName` field. Then `new NewName(...args)`
* Generated library file name can be changed in [package.json](package.json), `browser` field.

## Helpers

* [Cache](/src/cache.js): An in app memory singleton for holding global variables which can be gotten anywhere even in the react app services like so

```js
// setting a variable to be global
import Cache from './helpers/cache'
...
Cache.set('key', value)
```

```js
import Cache from './helpers/cache'
...
// usage 
export const performAction = () => {
  const key = Cache.get('key')
  console.log('key', key)
}
```

Check [main.js](/src/main.js) for setting and usage in [service.js](src/app/utils/service.js)


## Contribution 

Stick to 
* [standardjs](https://github.com/standard/standard) formatting and linting
* [conventional commit message](https://conventionalcommits.org/) for commit message patterns


## Contributors

* Theophilus Omoregbee <theo4u@ymail.com>
