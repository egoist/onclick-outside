# onclick-outside

> Trigger function when clicking outside a component for Vue.js

Vue 2.0 compatible, see demo: https://egoistian.com/onclick-outside

## Install

```bash
$ npm install --save onclick-outside
```

## Usage

```vue
<template>
  <click-outside :handler="handleClickOutside">
    <button>don't click me, click outside!</button>
  </click-outside>
</template>

<script>
  import ClickOutside from 'onclick-outside'

  export default {
    methods: {
      handleClickOutside(e) {
        console.log('hey, why did you touch outside?')
      }
    },
    components: {
      ClickOutside
    }
  }
</script>
```

## FAQ

### Not work on iOS, etc?

See https://github.com/kentor/react-click-outside#not-working-on-ios

## License

MIT &copy; [EGOIST](https://github.com/egoist)