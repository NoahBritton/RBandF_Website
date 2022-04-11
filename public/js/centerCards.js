const tire = document.querySelector("#tire")
const seat = document.querySelector("#seat")
const handlebar = document.querySelector("#handlebar")
const frame = document.querySelector("#frame")
const cardArea = document.querySelector("#cardArea")
const protocol = window.location.protocol
const host = window.location.host

function tires() {
  const newUrl = `${protocol}//${host}/tires`
  window.location.href = `${newUrl}`
}
function seats() {
  const newUrl = `${protocol}//${host}/seats`
  window.location.href = `${newUrl}`
}
function handlebars() {
  const newUrl = `${protocol}//${host}/handlebars`
  window.location.href = `${newUrl}`
}
function frames() {
  const newUrl = `${protocol}//${host}/frames`
  window.location.href = `${newUrl}`
}

cardArea.addEventListener('click', function (e) {
  if (e.target.id === ('handlebar')) {
    handlebars()
  }
  if (e.target.id === ('frame')) {
    frames()
  }
  if (e.target.id === ('seat')) {
    seats()
  }
  if (e.target.id === ('tire')) {
    tires()
  }
})