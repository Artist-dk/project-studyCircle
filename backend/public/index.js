const val = document.getElementById('form')
const file = document.getElementById('img')

val.addEventListener('submit', (e) => {
  sendFile(e)
});

function sendFile(e) {
  e.preventDefault();
  var a = new FormData(e.currentTarget)

  for (const item of new FormData(val)) {
    console.log(item[0], item[1])
  }
}