const container_carousel = document.getElementById('container-habilidades-carousel')


const button_proximo = document.getElementById('button-proximo')
const button_anterior = document.getElementById('button-anterior')

var indiceAtual = 0



button_proximo.addEventListener('click', () => {
    var todasDiv = container_carousel.querySelectorAll('.ativo, .desativo')

    todasDiv[indiceAtual].className = 'desativo'   

    if(indiceAtual == todasDiv.length - 1){
        todasDiv[0].className = 'ativo'
        indiceAtual = 0
    }else{
        todasDiv[indiceAtual + 1].className = 'ativo'
        indiceAtual++
    }

})

button_anterior.addEventListener('click', () => {
    var todasDiv = container_carousel.querySelectorAll('.ativo, .desativo')

    todasDiv[indiceAtual].className = 'desativo'  


    if(indiceAtual == 0){
        indiceAtual = todasDiv.length - 1
        todasDiv[indiceAtual].className = 'ativo'
    }
    else
    {
        todasDiv[indiceAtual - 1].className = 'ativo'
        indiceAtual--
    }
    
})

// habilidades carousel


fetch('../json/minhas-habilidades.json')
.then(response => response.json())
.then(data => {

const habilidades = data.habilidades
const EXTRAS = data.extras
// 

for(let KeyHabilidades in habilidades){
    console.log(habilidades[KeyHabilidades])

    const div_habilidade = document.createElement('div')
    const titulo_habilidade = document.createElement('span')
    const descricao_habilidade = document.createElement('p')
    const imagem_habilidade = document.createElement('img')
    // 
    
    if(KeyHabilidades == '01'){
        div_habilidade.className = 'ativo' 
    }
    else{
        div_habilidade.className = 'desativo' 
    }

    titulo_habilidade.innerHTML = habilidades[KeyHabilidades].titulo
    descricao_habilidade.innerHTML = habilidades[KeyHabilidades].descricao
    imagem_habilidade.src = habilidades[KeyHabilidades].imagem_url
    // 
    div_habilidade.appendChild(imagem_habilidade)
    div_habilidade.appendChild(titulo_habilidade)
    div_habilidade.appendChild(descricao_habilidade)
    container_carousel.appendChild(div_habilidade)

}


const div_pai_habilidades_extra = document.createElement('div')
const div_habiliades_extras = document.createElement('div')
const titulo = document.createElement('span')
// 
div_pai_habilidades_extra.id = "extras"
div_pai_habilidades_extra.className = "desativo"
titulo.innerHTML = 'EXTRAS'



for(let keyExtras in EXTRAS){
    const habilidade_extra = document.createElement('span')
    habilidade_extra.innerHTML = EXTRAS[keyExtras]
    div_habiliades_extras.appendChild(habilidade_extra)
}

div_pai_habilidades_extra.appendChild(titulo)
div_pai_habilidades_extra.appendChild(div_habiliades_extras)
container_carousel.appendChild(div_pai_habilidades_extra)

})



