/**
 * Imports
 */

var rect = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var el = $('<div style="left:20px;position:relative"><div id="test"></div></div>')

  var relative = rect(el.firstChild, true)
  var absolute = rect(el.firstChild)

  t.equal(relative.left, 0)
  t.equal(absolute.left, 20)

  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  // Clear the default margin on the body so we get
  // a clean reading
  document.body.style.margin = '0px'
  document.body.innerHTML = html
  return document.body.firstChild
}
