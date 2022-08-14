
//Examples of APIs

/* 

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("image-container").innerHTML = `
            <img src="${data.message}" />   
        `
    }) //data.message -> message is from the api


// "https://www.boredapi.com/api/activity"

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("container").innerHTML = 
        `
            <p> ${data.activity} </p>
        `
    }) //data.activity -> activity is from the api


============================================
.then(response => response.json()) means:


  .then(function(response) {
    return response.json()
  })
============================================


*/

// BORED BOT

let btn = document.getElementById("red-btn")

//Another way to add event listener instead of creating a variable
/*
document.getElementById("get-activity").addEventListener("click", function() {
  ....
})
*/

btn.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then (response => response.json())
    .then (data => {
        //console.log(data) <-- just for testing
        document.getElementById("task").textContent = data.activity
    })
})