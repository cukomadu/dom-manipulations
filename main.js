
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var pNode = document.querySelector("#compoundInvestment")
  var value = pNode.textContent
  pNode.textContent = parseInt(value) * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleColor = document.querySelector("#circle-bw")
  var computedStyle = window.getComputedStyle(circleColor)
  var backgroundColor = computedStyle.backgroundColor
  	if(backgroundColor === "rgb(255, 255, 255)"){
  		circleColor.style.background = "rgb(0, 0, 0)"
  	} else {
  		circleColor.style.background = "rgb(255, 255, 255)"	
  	}
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var redCircle = document.querySelector(".circle-red")
  var computedStyle = window.getComputedStyle(redCircle)
  var intWidth = parseInt(computedStyle.width)
  var intHeight = parseInt(computedStyle.height)
  redCircle.style.width = (intWidth * 2) + "px" 
  redCircle.style.height = (intHeight * 2) + "px"
  redCircle.style.transition = ".01s all ease"
  var maxWidth = 320 + "px"
  	if(redCircle.style.width === maxWidth){
  		redCircle.style.width = 40 + "px"
  		redCircle.style.height = 40 + "px"
  	} 
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})