
const mudarTitulo = () =>{
    const titulo = document.getElementById('titulo')
    titulo.innerText = document.getElementById('aaa').value
}

const btn = document.getElementById('btn')
btn.addEventListener('click', mudarTitulo)

