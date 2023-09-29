  
// Resolvi por o responsivo no javascript por conta que no arquivo 'mais-config' tem uma opção de dar zoom (que fiz com javascript) e isso afeta o css e causa alterações que só da pra ser resolvido também com o javascript 
// 
let tamanhoAtual = window.innerWidth;
var html = document.querySelector('html')

const fontSizePadrao = "62.5%"
html.style.fontSize = fontSizePadrao
var font750 = "55%"
var font450 = "55%"
var font380 = "45%"
// tamanho padrão


if(window.innerWidth > '750'){
  html.style.fontSize = fontSizePadrao
}

if(window.innerWidth  <= '750'){
  html.style.fontSize = font750
}

if(window.innerWidth  <= '450'){
  html.style.fontSize = font450
}

if(window.innerWidth  <= '380'){
  html.style.fontSize = font380
}



window.addEventListener('resize', () => {
  
  
  let NovoTamanho = window.innerWidth;
  let DiferençaTamanho = Math.abs(tamanhoAtual - NovoTamanho);
  html.style.fontSize = fontSizePadrao
  
  if(DiferençaTamanho > 25){
    

    if(window.innerWidth > '750'){
      html.style.fontSize = fontSizePadrao
    }
    if(window.innerWidth  <= '750'){
      html.style.fontSize =  font750
    }
    
    if(window.innerWidth  <= '450'){
        html.style.fontSize =  font450
    }
      
    if(window.innerWidth  <= '380'){
      html.style.fontSize =  font380
    }
      
    }


    
  });
  
  