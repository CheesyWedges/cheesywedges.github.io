
const url = "https://api.unsplash.com/photos?client_id=LGEveGm-PeBjwONWY20yOZti3DFE3J1i01UVn6lpfKg"
const url2 = "https://api.unsplash.com/search/photos?query=aircraft&client_id=LGEveGm-PeBjwONWY20yOZti3DFE3J1i01UVn6lpfKg"
    
fetch(url)
    .then(response => response.json())
    .then(data => {

        /* Display 10 photos returned */
        for(let i=0; i<data.length; i++) {
            document.getElementById("contents3").innerHTML += `
                <div class="photo">
                    <img src="${data[i].urls.regular}" alt="" >
                    <p>Photo by: <a href="${data[i].links.html}">${data[i].user.name}</a> on <a href="http://www.unsplash.com">Unsplash</a></p>
                </div>
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
                <div class="photo">
                    <img src="${postsArray[i].urls.regular}" alt="" > 
                    <p>Photo by: <a href="${postsArray[i].links.html}">${postsArray[i].user.name}</a> on <a href="http://www.unsplash.com">Unsplash</a></p> 
                </div>    
            `
        }
    })

fetch(url2)
    .then(response => response.json())
    .then(data => {

        /*  Get random number between 0 and 9 */
        let rand = Math.floor(Math.random()*10)

        /* Display 1 photo based on search query */
        document.getElementById("contents").innerHTML += `
        <div class="photo">
            <img src="${data.results[rand].urls.regular}" alt="" >
            <p>Photo by: <a href="${data.results[rand].links.html}">${data.results[rand].user.name}</a> on <a href="http://www.unsplash.com">Unsplash</a></p> 
        </div>
        `
    })