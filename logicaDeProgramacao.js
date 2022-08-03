function somaMultiplos(){
  let x = 3
  let soma = 0
  for(let i = 0; i < 1000; i++){
    if(i % x == 0){
      soma += i
    }
  }
  return soma
}
console.log(somaMultiplos())