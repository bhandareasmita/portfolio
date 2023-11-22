const button = document.getElementById("section-button");
button.addEventListener("click", function (event) {
    event.preventDefault();
    let limit = document.getElementById("section-input").value;

    if (!limit || isNaN(limit)) {
        limit = 1;
    } else {
        limit = Math.min(Math.max(parseInt(limit), 1), 30);
    }
    const apiKey = 'Iy1iLKZ8o4awaWmYK6IqAg==3NRt3xqAfWap7biD'
    const apiUrl = 'https://api.api-ninjas.com/v1/facts?limit=' + limit;
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response is not OK');
            }
            return response.json();
        })
        .then(function (data) {
            if (Array.isArray(data)) {
                const apiResponse = document.getElementById("api-response");
                apiResponse.innerHTML = ''; // Clear previous content
                const orderedList = document.createElement("ol");
                data.forEach(factObj => {
                    const fact = factObj["fact"];
                    const listItem = document.createElement("li");
                    listItem.innerHTML = fact + '<br>' + '<br>';
                    orderedList.appendChild(listItem);
                });
                apiResponse.appendChild(orderedList);
            } else {
                console.error('Oops! Something went wrong.');
            }
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
})