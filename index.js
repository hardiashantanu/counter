
let saveEl = document.getElementById("para")
let rand=document.getElementById("countl")
let count = 0
function func()
{
    count++
    rand.textContent=count
    
}

function save(){

    let countstr = count + " - "
    saveEl.textContent = saveEl.textContent+countstr
    count =0    
    rand.textContent=count
}


