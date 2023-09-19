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

fetch('../json/meus-projetos.json')
    .then(response => response.json())
    .then(data => {

        const ArrayProjetos = data.projetos;

        for(let i in ArrayProjetos){

            var section = document.createElement('section')
            // 
            var container_01 = document.createElement('div')
            var container_02 = document.createElement('div')
            // 
            section.appendChild(container_01)
            section.appendChild(container_02)
            // 
            container_01.className = 'container-01'
            container_02.className = 'container-02'
            // 
            // 
            var container_header = document.createElement('div')
            var container_imagem = document.createElement('div')
            var container_habiliades = document.createElement('div')
            var container_link = document.createElement('div')
            // 
            container_header.className = 'container_header'
            container_imagem.className = 'container_imagem'
            container_habiliades.className = 'container_habiliades'
            container_link.className = 'container_link'
            // 
            container_01.appendChild(container_header)
            container_01.appendChild(container_habiliades)
            container_02.appendChild(container_imagem)
            container_02.appendChild(container_link)
            // 
            var h3 = document.createElement('h3')
            var p = document.createElement('p')
            // 
            h3.innerText = ArrayProjetos[i].titulo
            p.innerText = ArrayProjetos[i].descricao
            // 
            container_header.appendChild(h3)
            container_header.appendChild(p)
            // 
            
            const ArrayHabilidades = ArrayProjetos[i].habilidades

            for(let KeyHabilidades in ArrayHabilidades ){
                let span = document.createElement('span')
                span.innerText = ArrayHabilidades[KeyHabilidades]
                container_habiliades.appendChild(span)

            } 
            var img = document.createElement('img')
            img.src = ArrayProjetos[i].url_imagem
            container_imagem.appendChild(img)
            // 
            var a = document.createElement('a')
            a.href = ArrayProjetos[i].link
            a.target = "_blank"
            a.innerText = ArrayProjetos[i].link
            container_link.appendChild(a)
            // 
            container_02.appendChild(container_link)


            container_meus_projetos.appendChild(section)


        }
})



