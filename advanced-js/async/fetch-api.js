//  fetch = function used for making HTTP requests to fetch responses.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in Javascript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})

const fetchBtn = document.getElementById("fetchDogbtn");
const dogImage = document.getElementById("dogImage");

fetchBtn.addEventListener("click", () => {
    // Update the UI to show we're loading
    dogImage.alt = "Loading a goodboy...";

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            else{
                return response.json();
            }
        })
        .then(data => {
            // 'data' is the full response from the API
            // The image URL is inside the 'message' property
            dogImage.src = data.message;
            dogImage.alt = "A cute dog";
        })
        .catch(error =>{
             console.error("Fetch failed: ", error);
            dogImage.alt = "Failed to load image. Try again.";
        });
});