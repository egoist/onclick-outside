# onclick-outside

Trigger function when clicking outside a component for Vue.js

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

## License

MIT &copy; [EGOIST](https://github.com/egoist)