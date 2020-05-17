// código do carro

let posXCarros = [500, 500, 500, 500, 500, 500]
let posYCarros = [45, 96, 150, 212, 260, 315]
let velocidadeCarros = [8, 2, 3.5, 2.5, 6, 4]
let comprimentoCarro = 60
let alturaCarro = 40

function mostraCarro(){
  for(let i=0; i<imagemCarros.length; i++){
  image(imagemCarros[i], posXCarros[i], posYCarros[i], comprimentoCarro, alturaCarro)
  }
}

function movimentaCarro(){
  for(let i=0; i<imagemCarros.length; i++){
    posXCarros[i] -= velocidadeCarros[i]
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i=0; i<imagemCarros.length; i++){
    if(passouTodaATela(posXCarros[i])){
      posXCarros[i] = 600
    }
  }
}

function passouTodaATela(posXCarro){
   return posXCarro < - 60
}





