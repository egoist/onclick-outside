'use strict';

var index = {
  name: 'onclick-outside',
  props: {
    handleClick: {
      type: Function,
      required: true
    }
  },
  mounted: function mounted() {
    document.addEventListener('click', this.handler, true)
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.handler, true)
  },
  methods: {
    handler: function handler(e) {
      var el = this.$refs.container
      if (!el.contains(e.target))
        this.handleClick(e)
    }
  },
  render: function render(h) {
    return h(
      'div',
      {
        ref: 'container'
      },
      this.$slots.default
    )
  }
}

module.exports = index;