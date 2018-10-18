export default ({ store, redirect }) => {
  if (!store.getters.getPinboardToken) {
    return redirect('/')
  }
}
