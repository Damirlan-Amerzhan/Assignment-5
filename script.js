let diameter = 0
let answer1 = 0
let answer2 = 0
let pi = 3.14159

document.getElementById('button').addEventListener('click', area)

function area () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)

  answer1 = (1/4)* pi * (diameter ** 2)
  answer1 = answer1.toFixed(2)

  answer2 = pi * diameter
  answer2 = answer2.toFixed(2)
 
  document.getElementById('answer-1').innerHTML = 'Area = ' + answer1
  document.getElementById('answer-2').innerHTML = 'Circumference = ' + answer2
}