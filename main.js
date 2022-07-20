let reflexo = document.getElementsByClassName('reflect')[0]

setInterval( ()=>{ reflexo.classList.toggle("reflect"); }, 6000)

// loading

let body = document.getElementsByClassName('body')[0]

window.addEventListener('load', loading())

function loading() {
    const loader = document.getElementById('carregar')
    loader.style.display = 'none'
}