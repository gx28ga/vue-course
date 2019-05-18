export default {
  created () {},
  functionnal: true,
  props: {
    name: String,
    renderFunc: Function
  },
  render: (h, ctx) => {
    return ctx.props.renderFunc(h, ctx.props.name)
  }
}
