/*function recursiva(number){
  if(number === 1){
    return 1
  }
  return number * recursiva(number - 1)
}
console.log(recursiva(6)) */

function aleatorio(){
    let divisores;
    let a = 2
    let b = 3
    let c = 10
    do {
      a += 2
      b += 2
      c += 2
      divisores = 0
      for(i = 1; i <= 10; i++){
        if(a % i == 0 && b % i == 0 && c % i == 0){
          divisores++
        }
      }
    }while(divisores !== 10)
    console.log(valor)
}

aleatorio()