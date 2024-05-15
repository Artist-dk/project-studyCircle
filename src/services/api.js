const apiEnv = {
  url: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  }
};

const Api = {
  async CreateNewAccount(formData) {
    console.log(formData)
    console.log(apiEnv.headers)
    try {
        await fetch(`${apiEnv.url}/account/createnew`, {
            method: 'POST',
            headers: apiEnv.headers,
            withCredentials: true,
            body: formData,
        })
        .then((res) => {
            res.json()
        })
        .then((data) => {
            console.log('Form data submitted:', data);
        })
        .catch((error) => {
            console.error('Error:', error)
        });
    } catch (error) {
        console.error('Error submitting form data:', error);
    }
  },

  async logout() {
    try {
      fetch(`h${this.url}/logout`,this.headers
      )
      .then(function (response) {
          console.log(response);
          // navigate('/account')
      })
      .catch(function (error) {
          console.log(error);
      });
    } catch (error) {
        console.log(error)
    }   
  },

  async fetchData() {
    try {
      const response = await fetch(this.url);
      console.log(this.url);
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
  },

  async sendData(endpoint, data) {
    try {
      const response = await fetch(`${this.url}/${endpoint}`, {
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
  },

  async updateData(endpoint, data) {
    try {
      const response = await fetch(`${this.url}/${endpoint}`, {
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
  },

  async deleteData(endpoint) {
    try {
      const response = await fetch(`${this.url}/${endpoint}`, {
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
}

export default Api;
