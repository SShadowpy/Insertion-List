const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("inp")
const ulEl = document.getElementById("list")
const deleteEl = document.querySelector(".dlt-btn")
const containerEl = document.querySelector(".container")

inputEl.addEventListener("keyup", e => {
    e.preventDefault()
    if (e.keyCode === 13) 
        guardar()
})

btnEl.addEventListener("click", guardar)

function guardar() {

    
    if (inputEl.value != "") {
        ulEl.innerHTML += `<li>${inputEl.value}<input type="button" value="x" class="dlt-btn"/></li>`
        //deleting input
        inputEl.value = ""  
        
        //configuring delete button
        const dlt = document.querySelectorAll('.dlt-btn')
        for (let i = 0; i < dlt.length; i++){
            dlt[i].addEventListener('click', () => {
                dlt[i].parentElement.style.display = "none"
            })
        }
    }
    else
        alert("Input a value")
}
