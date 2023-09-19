fetch('../json/meus-projetos.json')
    .then(response => response.json())
    .then(data => {

        const ArrayProjetos = data.projetos;

        for(let i in ArrayProjetos){

            var section = document.createElement('section')
            // 
            var container_header = document.createElement('div')
            var container_imagem = document.createElement('div')
            var container_habiliades = document.createElement('div')
            var container_link = document.createElement('div')
            // 
            container_header.className = 'container_header'
            container_imagem.className = 'container_imagem'
            container_habiliades.className = 'container-habilidades-usadas'
            container_link.className = 'container_link'
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
            section.appendChild(container_header)
            section.appendChild(container_habiliades)
            section.appendChild(container_imagem)
            section.appendChild(container_link)
            container_meus_projetos.appendChild(section)


        }
})
