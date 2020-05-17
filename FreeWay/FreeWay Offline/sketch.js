let xBarreira = 440
let yBarreira = 355
let larguraBarreira = 60
let alturaBarreira = 5

function setup() {
  createCanvas(500, 400);
  somTrilha.loop()
  somTrilha.setVolume(0.5)
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor()
  mostraCarro()
  fill("red")
  rect(xBarreira,yBarreira,larguraBarreira,alturaBarreira)
  movimentaCarro()
  movimentaAtor()
  voltaPosicaoInicialDoCarro()
  verificaColisao()
  incluiPontos()
  perde()
  ganha()
}