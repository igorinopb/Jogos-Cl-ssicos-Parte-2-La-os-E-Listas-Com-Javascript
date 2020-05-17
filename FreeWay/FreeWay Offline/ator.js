// código do ator

let posXAtor = 450
let posYAtor = 360
let velX = 3
let velY = 3
let diametroAtor = 40
let colisao = false
let meusPontos = 3
let velSom = 1


function mostraAtor(){
  image(imagemDoAtor, posXAtor, posYAtor, diametroAtor, diametroAtor)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW) && galinhaLivre()){
    posYAtor -= velY
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(posXAtor + diametroAtor < width){
      posXAtor += velX
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(posYAtor + diametroAtor < height){
      posYAtor += velY
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(posXAtor > 0){
      posXAtor -= velX
    }
  }
}

function verificaColisao(){
  for(let i=0; i<imagemCarros.length; i++){ 
    colisao = collideRectCircle(posXCarros[i], posYCarros[i], comprimentoCarro, alturaCarro, posXAtor + diametroAtor/2, posYAtor + diametroAtor/2, diametroAtor/2)
    if(colisao){
      colidiu()
    }
  }
}

function colidiu(){
  voltarParaComeço()
  if(meusPontos > 0){
    meusPontos--
  }
  for(i=0; i<velocidadeCarros.length; i++){
    velocidadeCarros[i] -= meusPontos/4
  }
  somColidiu.play()
  velSom-= 0.1
  somTrilha.rate(velSom)
}

function incluiPontos(){
  textSize(25)
  fill(255)
  textAlign(CENTER)
  text("Vidas:", width/2, 26)
  text(meusPontos, width/2 + 50, 26)
  marcaPonto()
}

function marcaPonto(){
  if(posYAtor+diametroAtor/2 <= 0){
    meusPontos++
    voltarParaComeço()
    for(i=0; i<velocidadeCarros.length; i++){
      velocidadeCarros[i] += meusPontos/4
    }
    somPontos.play()
    velSom+= 0.1
    somTrilha.rate(velSom)
  }
}

function voltarParaComeço(){
  posXAtor = 450
  posYAtor = 360
}

function pararJogo(mensagem, corMensagem){
  for(i=0; i<velocidadeCarros.length; i++){
    textSize(80)
    fill(corMensagem)
    textAlign(CENTER)
    text(mensagem, width/2, height/2 + 20)
      velocidadeCarros[i] = 0
      velX = 0
      velY = 0
    }
}

function perde(){
  if(meusPontos == 0){
    pararJogo("Você perdeu!", "red")
    somTrilha.stop()
  }
}

 function ganha(){
   if(meusPontos == 8){
    pararJogo("Você ganhou!", "green")
    somTrilha.stop()
   }
}

function galinhaLivre(){
  return !(posXAtor + diametroAtor > 450 && posYAtor > 340)
}


