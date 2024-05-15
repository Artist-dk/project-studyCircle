
const API_URL = 'http://example.com/api';

// Function to fetch data from the backend
export const fetchData = async (endpoint) => {
  async function login(username, password) {
    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          username,
          password
        })
      });
      if (!response.ok) {
        throw new Error(`Login failed with status: ${response.status}`);
      }
      // Navigate to homepage upon successful login (assuming navigate is a navigation function)
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  }
};

// try {
//   const response = await fetch(`${API_URL}/${endpoint}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   const data = await response.json();
//   return data;
// } catch (error) {
//   console.error('Error fetching data:', error.message);
//   throw error;
// }