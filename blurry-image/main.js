const text = document.querySelector('.text-loading')

let load = 0

let interval = setInterval(func,30)

function func(){
    load++
    text.innerText = `${load}%`
    text.style.opacity = 1 - (load * 0.01)
    if(load > 100){
        text.innerText = null
        clearInterval(interval)
    }
}
