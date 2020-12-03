window.dom1 = {
  find(selector) {
    return document.querySelectorAll(selector)
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i])
    }
  },
  style(node, name, value) {
    node.style[name] = value
  }
}