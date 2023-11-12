fetch('../json/minhas-habilidades.json')
    .then(response => response.json())
    .then(data => {

    const habilidades = data.habilidades
    const EXTRAS = data.extras
    // 
    const container_habiliades = document.getElementById('container-habilidade')

    for(let KeyHabilidades in habilidades){
    // criando elementos
    const container_box = document.createElement('div')
    const container_tecnologia = document.createElement('div')
    const container_descricao = document.createElement('div')
    // 
    const img_tecnologia = document.createElement('img')
    const span_name_tecnologia = document.createElement('span')
    const p_descricao_tecnologia = document.createElement('p')
    // 
    // adicionando classe
    container_box.className = "box"
    container_tecnologia.className = "tecnologia"
    container_descricao.className = "descricao"
    //adicioar valores
    img_tecnologia.src = habilidades[KeyHabilidades].imagem_url
    span_name_tecnologia.innerHTML = habilidades[KeyHabilidades].titulo
    // 
    p_descricao_tecnologia.innerHTML = habilidades[KeyHabilidades].descricao
    // 
    // adicionar a page 
    container_tecnologia.appendChild(img_tecnologia)
    container_tecnologia.appendChild(span_name_tecnologia)
    container_descricao.appendChild(p_descricao_tecnologia)
    container_box.appendChild(container_tecnologia)
    container_box.appendChild(container_tecnologia)
    container_box.appendChild(container_descricao)
    // 
    container_habiliades.appendChild(container_box)

    }

    // ============= EXTRAS

    const ContainerBoxExtras = document.createElement('div')
    const H1BoxExtras = document.createElement('label')
    const divComAsTodosAsHabilidadeExtra = document.createElement('div')
    const CarouseldivComAsTodosAsHabilidadeExtra = document.createElement('div')
    // 
    ContainerBoxExtras.className = "box-extras"
    H1BoxExtras.innerHTML = "Extras"
    
    for(let KeyExtras in EXTRAS){
        var span_habilidade_extra = document.createElement('span')
        var carousel_span_habilidade_extra = document.createElement('span')
        span_habilidade_extra.innerHTML = EXTRAS[KeyExtras]
        carousel_span_habilidade_extra.innerHTML = EXTRAS[KeyExtras]
        // 
        divComAsTodosAsHabilidadeExtra.appendChild(span_habilidade_extra)
        CarouseldivComAsTodosAsHabilidadeExtra.appendChild(carousel_span_habilidade_extra)
    }

    ContainerBoxExtras.appendChild(H1BoxExtras)
    ContainerBoxExtras.appendChild(divComAsTodosAsHabilidadeExtra)
    container_habiliades.appendChild(ContainerBoxExtras)
    




})


