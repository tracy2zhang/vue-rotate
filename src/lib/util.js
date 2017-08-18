export const isIOS = /iphone|ipad/.test(navigator.userAgent.toLowerCase())

const browserPrefixes = ['webkit', 'Moz', 'ms', 'O']
const style = document.createElement('div').style

function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function getExistStyle (styleName) {
  let existStyleName = styleName
  if (existStyleName in style) {
    return existStyleName
  }
  for (let i = 0; i < browserPrefixes.length; i++) {
    let prefix = browserPrefixes[i]
    existStyleName = `${prefix}${capitalizeFirstLetter(styleName)}`
    if (existStyleName in style) {
      return existStyleName
    }
  }
}

export function css (el, styleName, value) {
  let existStyle = getExistStyle(styleName)
  if (value !== undefined) {
    el.style[existStyle] = value
  } else {
    return el.style[existStyle]
  }
}
