  
// Resolvi por o responsivo no javascript por conta que no arquivo 'mais-config' tem uma opção de dar zoom (que fiz com javascript) e isso afeta o css e causa alterações que só da pra ser resolvido também com o javascript 
// 
let tamanhoAtual = window.innerWidth;

window.addEventListener('resize', () => {

  
  var html = document.querySelector('html')
  
  let NovoTamanho = window.innerWidth;
  let DiferençaTamanho = Math.abs(tamanhoAtual - NovoTamanho);
  
  
  if(DiferençaTamanho > 25){
    const fontSizePadrao = "62.5%"
    html.style.fontSize = fontSizePadrao

      if(window.innerWidth  <= '750'){
        html.style.fontSize = "55%"
      }
      
      if(window.innerWidth  <= '450'){
        html.style.fontSize = "45%"
      }

      if(window.innerWidth  <= '380'){
        html.style.fontSize = "40%"
      }
      
    }


    
  });
  
  