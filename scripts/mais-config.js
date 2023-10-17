const buttonAbrirContainerConfig = document.getElementById('button-config')
// 
const buttonMaisFontEscurecer = document.getElementById('button-mais-escurecer')
const buttonMenosFontEscurecer = document.getElementById('button-menos-escurecer')
// 
const buttonAumentarZoom = document.getElementById('button-aumentar-zoom')
const buttonDiminuirtarZoom = document.getElementById('button-diminuir-zoom')

var ZoomAplicado = 0
var ZoomAplicar = 5


buttonAbrirContainerConfig.addEventListener("click", () =>{
    var containerConfig = document.getElementById('container-config')
    var StyleContainerConfig = getComputedStyle(containerConfig)

    if(StyleContainerConfig.display == 'none'){
        containerConfig.style.display = 'block'
    }
    else{
        containerConfig.style.display = 'none'
    }
})

// Ao clicar fora do container fecha-lo
document.addEventListener('click', (e) =>{
    var containerConfig = document.getElementById('container-config')
    if(!containerConfig.contains(e.target) && !buttonAbrirContainerConfig.contains(e.target) ){
        containerConfig.style.display = 'none'
    }
})

buttonMaisFontEscurecer.addEventListener('click', () => {
    var paragrafos = document.querySelectorAll('p, label, span, h1,h2,h3, button');
    paragrafos.forEach(function(paragrafo) {

        var computedStyle = window.getComputedStyle(paragrafo);
        var valueAtual = parseInt(computedStyle.fontWeight)


        if(valueAtual == 100){
            paragrafo.style.fontWeight = valueAtual + 200
        }
        else if(valueAtual == 300){
            paragrafo.style.fontWeight = valueAtual + 100
        }
        else if(valueAtual == 400){
            paragrafo.style.fontWeight = valueAtual + 200
        }
        // escurecer
        
        
    });
})

buttonMenosFontEscurecer.addEventListener('click', () => {
    
    var paragrafos = document.querySelectorAll('p, label, span, h1,h2,h3, button');
    paragrafos.forEach(function(paragrafo) {

        var computedStyle = window.getComputedStyle(paragrafo);
        var valueAtual = parseInt(computedStyle.fontWeight)


        if(valueAtual == 600){
            paragrafo.style.fontWeight = valueAtual - 200
        }
        else if(valueAtual == 400){
            paragrafo.style.fontWeight = valueAtual - 100
        }
        else if(valueAtual == 300){
            paragrafo.style.fontWeight = valueAtual - 200
        }
        // escurecer
        
        
    });
})


buttonAumentarZoom.addEventListener("click", () => {
    var html = document.querySelector('html')
    var computedStyle = window.getComputedStyle(html);
    // 
    var TamanhoAtual = computedStyle.fontSize.replace('px', "")
    // 
    var PorcentagemAtual = (TamanhoAtual/ 16 ) * 100
    var calculo = (parseFloat(PorcentagemAtual + ZoomAplicar))

    if(ZoomAplicado < 2){
        html.style.fontSize = calculo + '%'
        ZoomAplicado++

    }

})

buttonDiminuirtarZoom.addEventListener('click', () => {
    var html = document.querySelector('html')
    var computedStyle = window.getComputedStyle(html);
    // 
    var TamanhoAtual = computedStyle.fontSize.replace('px', "")
    // 
    //  calculo:{tamanho atual/ tamanho de 100%) * 100} 
    //  resultado: {% do tamanho atual}
    //  (16 == 100%)
    // 
    var PorcentagemAtual = (TamanhoAtual / 16 ) * 100
    var calculo = parseFloat(PorcentagemAtual - ZoomAplicar)


    if(ZoomAplicado > -5){
        html.style.fontSize = calculo + '%'
        ZoomAplicado--
    }
})




let tamanhoAtualWidth = window.innerWidth;


window.addEventListener('resize', () => {
    // resetar o zom aplicado quando o responsivo for ativado
    let NovoTamanho = window.innerWidth;
    let DiferençaTamanho = Math.abs(tamanhoAtualWidth - NovoTamanho);
    
    if(DiferençaTamanho > 25){
        ZoomAplicado = 0
    }
});