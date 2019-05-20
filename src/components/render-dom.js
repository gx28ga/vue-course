export default {
  created () {},
  functional: true,
  props: {
    name: Number,
    renderFunc: Function
  },
  render: (h, ctx) => {
    return ctx.props.renderFunc(h, ctx.props.name)
  }
}
