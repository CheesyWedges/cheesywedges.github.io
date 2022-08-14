
let btn = document.getElementById("red-btn")

btn.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then (response => response.json())
    .then (data => {
        //console.log(data) <-- just for testing
        document.getElementById("task").textContent = data.activity
    })
})