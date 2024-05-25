// your code here
document.getElementById('button').addEventListener('click', function() {
  // Get the values from the input fields
  const name = document.getElementById('name').value;
  const year = document.getElementById('year').value;
  
  // Construct the base URL
  let url = 'https://localhost:8080/';

  // Construct the query string based on the provided values
  const params = new URLSearchParams();
  if (name) {
    params.append('name', name);
  }
  if (year) {
    params.append('year', year);
  }

  // Append the query string to the base URL
  if (params.toString()) {
    url += '?' + params.toString();
  }

  // Update the text content of the h3 element with the constructed URL
  document.getElementById('url').textContent = url;
});

