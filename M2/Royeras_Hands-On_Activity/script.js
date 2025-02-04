fetch("http://private-anon-5c76df3549-fortunecookie.apiary-proxy.com/v1/lessons")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));