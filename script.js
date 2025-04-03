import { getJoke } from "./api.js";
import { createElement } from "./dom.js"


const form = document.querySelector("form");
const jokesList= document.querySelector("#joke-list");
const errorPara = document.querySelector("#error-message"); 


form.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Clear both the jokes container and error message
    removeAllChildren(jokesList);
    errorPara.innerText = ""; 

    try {
        const formData = new FormData(form);
        const limit = formData.get("limit")
        if (limit < 1 || limit > 5) {
            throw new Error("Limit must be between 1 and 5")
        }
        const alljokes = await getJoke(limit)
        
        alljokes.forEach(joke => {
            const jokeText = joke.joke || joke.jokes; // this is to handle the case where the API returns a single joke or multiple jokes
            createElement("li", jokeText, jokesList) // createElement is a function that creates a new element and appends it to the parent element
        })
    } catch (e) {
        console.log(e);
    
        // Display the error message to the user
        errorPara.innerText = e.message;
        console.log(errorPara.innerText)
    }
})

// Function to remove all children from a parent element
// This is useful for clearing the jokes container before displaying new jokes
const removeAllChildren = (parent) => { 
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


    