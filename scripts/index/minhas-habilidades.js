fetch('../json/minhas-habilidades.json')
    .then(response => response.json())
    .then(data => {

    const habilidades = data.habilidades
    const EXTRAS = data.extras
    // 
    const container_habiliades = document.getElementById('container-habilidade')
    const Containercarousel = document.getElementById("container-carousel")

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
    span_name_tecnologia.innerHTML = habilidades[KeyHabilidades].nome
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

    // habilidades carousel

    const divItemCarousel = document.createElement('div')
    // 
    const carousel_img_tecnolia = document.createElement('img')
    const carousel_nome_tecnolia = document.createElement('span')
    const carousel_p_tecnolia = document.createElement('p')
    // adicao de valores
    carousel_img_tecnolia.src = habilidades[KeyHabilidades].imagem_url
    carousel_nome_tecnolia.innerHTML = habilidades[KeyHabilidades].nome
    carousel_p_tecnolia.innerHTML = habilidades[KeyHabilidades].descricao

    



    if(KeyHabilidades == 1){
        divItemCarousel.className = "carousel-item active"
    }
    else
    {
        divItemCarousel.className = "carousel-item"
    }


    divItemCarousel.appendChild(carousel_img_tecnolia)
    divItemCarousel.appendChild(carousel_nome_tecnolia)
    divItemCarousel.appendChild(carousel_p_tecnolia)
    Containercarousel.appendChild(divItemCarousel)

    }



    // ============= EXTRAS

    // 
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
    
    // EXTRAS CAROUSEL


    const Carousel_new_item = document.createElement('div')
    const Carousel_h1_extras = document.createElement('span')
    // 
    Carousel_new_item.className = "carousel-item"
    Carousel_h1_extras.innerHTML = "Extras"


    Carousel_new_item.appendChild(Carousel_h1_extras)
    Carousel_new_item.appendChild(CarouseldivComAsTodosAsHabilidadeExtra)
    Containercarousel.appendChild(Carousel_new_item)




})


