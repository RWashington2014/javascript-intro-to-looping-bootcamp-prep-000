// Looping


function forLoop(array){
    var array = []

  for(let i = 0; i < 25; i++){
      array = [`"I am ${i} strange loops"`, ...array]
  }
}

function whileLoop(number){

    while (number > 0) {
      console.log(`"My number is ${number}"`)
      --number
      }
      return "done"
}
function doWhileLoop(array){

  var array = []

    function maybeTrue() {
      return Math.random() >= 0.5
  }
    do {
      array.pop()
    } while (array.length > 0 && maybeTrue());

    return array
}
