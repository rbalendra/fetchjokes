export const getJoke = async (limit) => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?type=single&amount=${limit}`, {
        headers: {
            Accept: "application/json"
        }
    });

    if (!response.ok) { 
        throw new Error("Could not get data") }
    }

    const data = await response.json();
    // return data.jokes;
    // after a while I realised that if the number chosen was one joke the forEach loop would not work with the API response
    if (data.joke) {
        return [data]; // wrap the single joke in an array to make it consistent with the multiple jokes case
    }
    else {
        return data.jokes;// return the array of jokes
    }
   }