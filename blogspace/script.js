let postsArray = []

function renderPosts() {

    let html = "" //empty string

    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        
    postsArray = data.slice(0, 5)     //starting from 0 index, 5 values (not unto index 5. 5 values)

    renderPosts()
})

document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()  //This wont refresh the page when submit button is clicked

    const postTitle = document.getElementById("post-title").value   //get values from the form
    const postBody = document.getElementById("post-body").value

    const data = {          //create object with the values input
        title: postTitle,
        body: postBody
    }

    //Post request
    const options = {
        method: "POST",             //post request
        body: JSON.stringify(data), //the object we created above
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {

            postsArray.unshift(post)    //add the newly added item to the beginning of the array
            renderPosts()

            //Clear the form for the next item
            document.getElementById("new-post").reset();
    })
})