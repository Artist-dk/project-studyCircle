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

function Hack() {
  fetch('http://localhost:8081/tutorial/701b1d1b129e231650b2edef521bfffc')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response)
    return response.text(); 
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  
  const tutorialId = '701b1d1b129e231650b2edef521bfffc';
  fetchTutorial(tutorialId);
  

}