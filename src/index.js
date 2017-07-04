export default {
  name: 'onclick-outside',
  props: {
    handler: {
      type: Function,
      required: true
    },
    touch: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside, true)
    if (this.touch) {
      document.addEventListener('touchstart', this.handleClickOutside, true)
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside, true)
    if (this.touch) {
      document.removeEventListener('touchstart', this.handleClickOutside, true)
    }
  },
  methods: {
    handleClickOutside(e) {
      const el = this.$refs.container
      if (!el.contains(e.target))
        this.handler(e)
    }
  },
  render(h) {
    return h(
      'div',
      {
        ref: 'container'
      },
      this.$slots.default
    )
  }
}