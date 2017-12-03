document.body.style.marginTop = '2rem'
const div = document.createElement('div')
div.style.cssText = 'position: fixed; top: 0; width: 100%; height: 3rem;'
document.body.prepend(div)

setInterval(() => {
  const text = getText()
  div.innerText = text
}, 5000)

function getText() {
  fetch('https://bx.in.th/api/')
    .then(res => res.json())
    .then(console.log)
}
