
const BASE_URL = process.env.REACT_APP_BASE_URL;

// GET request to fetch data from the backend
export async function fetchData() {
  try {
    const response = await fetch(process.env.REACT_APP_BASE_URL);
    console.log(process.env.REACT_APP_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.text();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


// POST request to send data to the backend
export async function sendData(endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to send data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error sending data:', error);
    throw error;
  }
}

// PUT request to update data on the backend
export async function updateData(endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}

// DELETE request to delete data from the backend
export async function deleteData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
}
