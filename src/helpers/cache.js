// cache singleton for holding global variables

const inAppMemory = {}

export default {
  set (name, value) {
    inAppMemory[name] = value
  },
  get (name) {
    return inAppMemory[name]
  }
}
