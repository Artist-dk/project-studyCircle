
import axios from "axios";

const apiEnv = {
  url: process.env.REACT_APP_BASE_URL,
  headers: {
    // Accept: "*/*",
    // "Content-Type": "application/json",
    'Content-Type': 'multipart/form-data'
  },
  credentials: "include",
};

const { headers, credentials } = apiEnv;

function handleResponse(response) {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.text();
}

function handleError(error) {
  console.error("Error:", error);
}

function makeRequest(endpoint, method, data) {
  let url = `${apiEnv.url}/${endpoint}`;
  if (method === 'GET' && data) {
    const queryParams = new URLSearchParams(data);
    url += `?${queryParams.toString()}`;
  }
  return fetch(url, {
    method,
    headers,
    credentials,
    body: (method !== 'GET') ? data : undefined,
  })
  .then((response) => {
    console.log("Response:", response); // Log the entire response object
    return handleResponse(response);
  })
  .then((data) => {
    console.log("Response data:", data); // Log the parsed data
    return data;
  })
  .catch(handleError);
}


const Api = {
  createNewAccount(formData) {
    return makeRequest("account/createnew", "POST", formData).then((data) => {
      console.log("Form data submitted:", data);
    });
  },

  logout() {
    return makeRequest("logout", "GET").then((data) => {
      console.log("Logout successful:", data);
      return true;
    });
  },

  login(formData) {
    return makeRequest("login", "POST", formData).then((data) => {
      console.log("Login successful:", data);
      return data; 
    });
  },

  addNewBook(dt) {
    console.log(dt)
    axios.post('http://localhost:8081/library/add-new-book', dt, {
        headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(response => {
        console.log('Form submitted successfully:', response.data);
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    });
    // return makeRequest("library/add-new-book", "POST", dt).then((data) => {
    //   console.log("Login successful:", data);
    //   return data; 
    // });
  }
};


export default Api;