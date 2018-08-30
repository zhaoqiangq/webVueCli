export default {
  install: function (vm) {
    let local = {
      save (key, value) {
        localStorage.setItem(key, JSON.stringify(value))
      },
      fetch (key) {
        return JSON.parse(localStorage.getItem(key)) || {}
      }
    }
    vm.prototype.$local = local
  }
}
