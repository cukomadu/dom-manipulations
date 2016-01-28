

answerQuestionFor("#pig-latin", function(){
  //your work here

  var li_List = (qsAll('#pig-latin li'));

  for (var i = 0; i < li_List.length; i++){
    console.log
    li_List[i].innerHTML = li_List[i].innerHTML.split('').reverse().join('');
  }
})

answerQuestionFor("#blow-up",function(){
  var circle = qs('.circle')
  var w = circle.offsetWidth
      h = circle.offsetHeight

   if (w >= 320){
    circle.style.width = "40px";
    circle.style.height = "40px";
   } else {
    circle.style.width = parseInt(w*2)+"px";
    circle.style.height = parseInt(w*2)+"px";
   }
})

answerQuestionFor("#reverse-squares",function(){
  var squares = qsAll('#reverse-squares .square');
  var answerBox = qs('#reverse-squares .answer-box');


  answerBox.innerHTML = ''


  for (var i = squares.length-1; i >= 0 ; i--){
    console.log(squares[i].innerHTML)
    answerBox.appendChild(squares[i])
  }
  
})

