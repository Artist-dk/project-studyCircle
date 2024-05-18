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
  console.log("Hack")
  // app.post('/api/save-tutorial', (req, res) => {
    
    const jsonData  = 
    {
      "title": "Tutorial Builder",
      "description": "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium, quia sed sapiente quas assumenda? Accusantium culpa asperiores quo aspernatur. Nihil consequatur aperiam alias nam eum omnis dicta. Quae, voluptatem?",
      "sections": [
        {
          "title": "Introduction",
          "content": "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium, quia sed sapiente quas assumenda? Accusantium culpa asperiores quo aspernatur. Nihil consequatur aperiam alias nam eum omnis dicta. Quae, voluptatem?",
          "media": "https://i.pinimg.com/236x/b4/01/16/b4011671ad09d66cbc7834c0886a5bb1.jpg"
        },
        {
          "title": "Step 1",
          "content": "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium, quia sed sapiente quas assumenda? Accusantium culpa asperiores quo aspernatur. Nihil consequatur aperiam alias nam eum omnis dicta. Quae, voluptatem?",
          "media": "https://i.pinimg.com/236x/b4/01/16/b4011671ad09d66cbc7834c0886a5bb1.jpg"
        },
        {
          "title": "",
          "content": "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium, quia sed sapiente quas assumenda? Accusantium culpa asperiores quo aspernatur. Nihil consequatur aperiam alias nam eum omnis dicta. Quae, voluptatem?",
          "media": "https://i.pinimg.com/236x/b4/01/16/b4011671ad09d66cbc7834c0886a5bb1.jpg"
        },
        {
          "title": "",
          "content": "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium, quia sed sapiente quas assumenda? Accusantium culpa asperiores quo aspernatur. Nihil consequatur aperiam alias nam eum omnis dicta. Quae, voluptatem?",
          "media": "https://i.pinimg.com/236x/b4/01/16/b4011671ad09d66cbc7834c0886a5bb1.jpg"
        },
        {
          "title": "",
          "content": "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium, quia sed sapiente quas assumenda? Accusantium culpa asperiores quo aspernatur. Nihil consequatur aperiam alias nam eum omnis dicta. Quae, voluptatem?",
          "media": "https://i.pinimg.com/236x/b4/01/16/b4011671ad09d66cbc7834c0886a5bb1.jpg"
        },
        {
          "title": "",
          "content": "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium, quia sed sapiente quas assumenda? Accusantium culpa asperiores quo aspernatur. Nihil consequatur aperiam alias nam eum omnis dicta. Quae, voluptatem?",
          "media": "https://i.pinimg.com/236x/b4/01/16/b4011671ad09d66cbc7834c0886a5bb1.jpg"
        },
        {
          "title": "",
          "content": "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium, quia sed sapiente quas assumenda? Accusantium culpa asperiores quo aspernatur. Nihil consequatur aperiam alias nam eum omnis dicta. Quae, voluptatem?",
          "media": "https://i.pinimg.com/236x/b4/01/16/b4011671ad09d66cbc7834c0886a5bb1.jpg"
        }
      ]
    };

console.log(jsonData)
const url = "http://localhost:8081/tutorial/save"; 

fetch(url, {
  method: 'POST', // HTTP method for sending data
  headers: { 'Content-Type': 'application/json' }, // Set content type
  body: JSON.stringify(jsonData) // Convert data to JSON string
})
.then(response => {
  if (!response.ok) {
    throw new Error(`Error sending data: ${response.statusText}`);
  }
  console.log('Data sent successfully!');
})
.catch(error => {
  console.error('Error:', error);
});

  

  // });
}