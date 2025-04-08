const apiUrl = "https://www.goldapi.io/api/XAU/INR";
const accessToken = "goldapi-1hp8h8419m983vi7t-io";

// Function to fetch the gold price data
const fetchGoldPrices = async () => {
  const myHeaders = new Headers();
  myHeaders.append("x-access-token", accessToken);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();

    // Extract relevant data from the API response
    const price24k = data.price_gram_24k + 500;
    const price22k = data.price_gram_22k + 450;
    const price18k = data.price_gram_18k + 380;

    // Update the HTML with the new data
    document.getElementById("rate-24k").innerText = price24k.toFixed(2);
    document.getElementById("rate-22k").innerText = price22k.toFixed(2);
    document.getElementById("rate-18k").innerText = price18k.toFixed(2);
  } catch (error) {
    console.error("Error fetching gold prices:", error);
  }
};

// Initial fetch on page load
fetchGoldPrices();

// Update every 8 hours (28800000 milliseconds)
setInterval(fetchGoldPrices, 28800000);  // 8 hours in milliseconds
