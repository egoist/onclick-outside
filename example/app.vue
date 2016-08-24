<template>
  <div id="app">
    <click-outside :handler="handleClick" class="box">
      <h1 v-if="clicked > 1000" style="color: magenta;">Clicked!</h1>
      <h1 v-else>Click outside the box!</h1>
      <p>
        Can you tell who's the best girl?
      </p>
      <p>
        Rem, with no doubt! <strong>{{ clicked }}</strong> people agree!
      </p>
    </click-outside>
  </div>
</template>

<script>
  import ClickOutside from '../src'

  export default {
    data() {
      return {
        clicked: 1000
      }
    },
    methods: {
      handleClick() {
        this.clicked++
      }
    },
    components: {
      ClickOutside 
    }
  }
</script>

<style>
  body {
    font: 16px/1.7 -apple-system, BlinkMacSystemFont,
                    'avenir next', avenir,
                    helvetica, 'helvetica neue',
                    Ubuntu,
                    'segoe ui', arial,
                    sans-serif;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 300px;
    max-width: 600px;
    margin: 100px auto;
    border: 3px solid #ccc;
    user-select: none;
  }
</style>