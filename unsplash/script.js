
const url = "https://api.unsplash.com/photos?client_id=LGEveGm-PeBjwONWY20yOZti3DFE3J1i01UVn6lpfKg"
const url2 = "https://api.unsplash.com/search/photos?query=sensual&client_id=LGEveGm-PeBjwONWY20yOZti3DFE3J1i01UVn6lpfKg"

fetch(url)
    .then(response => response.json())
    .then(data => {

        /* Display 10 photos returned by default */
        for(let i=0; i<data.length; i++) {
            document.getElementById("contents").innerHTML += `
            <img src="${data[i].urls.regular}" alt="" >
        `
        }
    })

fetch(url)
    .then(response => response.json())
    .then(data => {

        /* Display the first 5 photos returned */
        let postsArray = data.slice(0, 5)

        for (let i = 0; i < postsArray.length; i++) {
            document.getElementById("contents2").innerHTML += `
        <img src="${postsArray[i].urls.regular}" alt="" >
    `
        }
    })

fetch(url2)
    .then(response => response.json())
    .then(data => {

        /*  Get random number between 0 and 9 */
        let rand = Math.floor(Math.random()*10)

        /* Display random photo from the results */
        document.getElementById("contents3").innerHTML += `
            <img src="${data.results[rand].urls.regular}" alt="" >
        `
    })