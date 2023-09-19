const button_sobre_mim = document.getElementById('button-sobre-mim')
const button_meus_projetos = document.getElementById('button-meus-projetos')

let container_sobre_mim = document.getElementById('container-sobre-mim')
let container_meus_projetos = document.getElementById('container-meus-projetos')


button_sobre_mim.addEventListener('click', () => {


    container_sobre_mim.style.display = 'block';
    container_meus_projetos.style.display = 'none';

    button_sobre_mim.classList.remove('button-nav-desativado')
    button_meus_projetos.classList.remove('button-nav-ativo')

    button_sobre_mim.classList.add('button-nav-ativo')
    button_meus_projetos.classList.add('button-nav-desativado')

})

button_meus_projetos.addEventListener('click', () => {


    container_sobre_mim.style.display = 'none';
    container_meus_projetos.style.display = 'block';

    button_sobre_mim.classList.remove('button-nav-ativo')
    button_meus_projetos.classList.remove('button-nav-desativado')


    button_sobre_mim.classList.add('button-nav-desativado')
    button_meus_projetos.classList.add('button-nav-ativo')
})




