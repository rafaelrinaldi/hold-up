# hold-up [![Build Status](https://semaphoreci.com/api/v1/rafaelrinaldi/hold-up/branches/master/badge.svg)](https://semaphoreci.com/rafaelrinaldi/hold-up)

> Wait until a given condition is true

## Install

```sh
npm install @rafaelrinaldi/hold-up
```

## Usage

```js
import holdUp from '@rafaelrinaldi/hold-up'

async function injectVendorScript() {
  // Asynchronously load a cheesy vendor script that triggers a bunch of other
  // subsequent requests
  const script = document.createElement('script')
  script.setAttribute('src', 'https://cdn.vendor.com/bundle.min.js')
  document.body.appendChild(script)

  // In order to use their SDK you must wait for the instances to be available
  await holdUp(() => window.$vendor && window.$vendor.sdk)

  // Finally use the SDK
  window.$vendor.sdk.show()
}

injectVendorScript()
```

## API

### `holdUp(condition, [timeoutInterval], [retryInterval])`

Returns a `Promise` instance that resolves whenever `condition` returns `true`. Rejects if `condition` is `false` or `timeoutInterval` times out.

#### `condition`

Type: `Function`  

Function that the library will attempt to run until it gets a `true` value back.

#### `timeoutInterval`

Type: `Number`  
Default: `8000`  

The maximum amount of time to wait until execution times out.

#### `retryInterval`

Type: `Number`  
Default: `50`  

The interval between each attempt of calling `condition`.

## License

MIT © [Rafael Rinaldi](rinaldi.io)

---

<p align="center">
  <a href="https://buymeacoff.ee/rinaldi" title="Buy me a coffee">Buy me a ☕</a>
</p>
