const endDate = "22 October 2023  11:30 AM"

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    // console.log(end)
    // console.log(now)
    // console.log(diff)
    // the above diff gives us the milisec difference between the two dates
    //u can convert the above diff into days hours minutes and secs
    // i.e days = diff/3600/60/24
    
    if (diff < 0) return

    inputs[0].value = Math.floor(diff / 3600 /24);  // to convert days
    inputs[1].value = Math.floor(diff / 3600) % 24; // to convert hours
    inputs[2].value = Math.floor(diff / 60) % 60; // to convert minutes
    inputs[3].value = Math.floor(diff) % 60; // to convert hours
}

clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)