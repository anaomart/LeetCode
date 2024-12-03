var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies)
    return candies.map((kid) => kid + extraCandies >= max)
};


console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))


const url = 'https://east-1.calltools.io/api/contacts/';
const token = 'Token 59aa53242f90fd1c1d4f832d49de66a5823bd196';

// Prepare the lead data from input
const leadData = {
  lastName: inputData.lastName || '',
  firstName: inputData.firstName || '',
  number: inputData.number || '',
  city: inputData.city || '',
  zip: inputData.zip || '',
  address: inputData.address || '',
  state: inputData.state || '',
  tags: [109461],
  email: inputData.email || ''
};

// Send a POST request to the API with the lead data
const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token
  },
  body: JSON.stringify(leadData)
});

// Check if the response is successful
if (!response.ok) throw new Error('Failed to send lead data');

// Parse the response JSON
const responseData = await response.json();

// Prepare the output based on the response
output = { success: true, data: responseData };
