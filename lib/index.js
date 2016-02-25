/**
 * Expose elementRect
 */

module.exports = elementRect

/**
 * elementRect
 */

function elementRect (node, offsetParent) {
  if (offsetParent === true) offsetParent = node.offsetParent

  var rect = node.getBoundingClientRect()
  var prect = offsetParent
    ? offsetParent.getBoundingClientRect()
    : {left: 0, top: 0}

  return {
    left: rect.left - prect.left,
    top: rect.top - prect.top,
    width: rect.width,
    height: rect.height
  }
}
