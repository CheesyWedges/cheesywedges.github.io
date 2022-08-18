document.getElementById("btn-scheme").addEventListener("click", function() {

    let selectedColour = document.getElementById("seed-colour").value
    let selectedScheme = document.getElementById("select-scheme").value
    /*  console.log(selectedColour.value)   */
    /*  console.log(selectedScheme.value)   */

    let url = "https://www.thecolorapi.com/scheme?"
    url += `hex=${(selectedColour).replace('#',"")}&mode=${selectedScheme}`
    /*  console.log(url)    */

    fetch(url)
        .then(response => response.json())
        .then(data => {
            /*  console.log(data)   */

            for(let i=0; i<data.colors.length; i++) {
                let hexCode = `hex-${i+1}`
                let colourBox = `box-${i+1}`

                document.getElementById(hexCode).innerText = data.colors[i].hex.value
                document.getElementById(colourBox).style.backgroundColor = data.colors[i].hex.value
            }
    })
})