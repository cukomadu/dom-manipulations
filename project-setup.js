
var qs = function(cssSelct){
  return document.querySelector(cssSelct);
}

var qsAll = function(cssSelct){
  return document.querySelectorAll(cssSelct);
}

function answerQuestionFor(qId,fn){
  qs(qId+' button').addEventListener('click',function(){
    fn();
  })
}


function generatePromptAndDemoHTML(obj, index){
  var htmlString  = "<div class='prompt'>"
      htmlString +=   "<h3>Task #"+(index+1)+"</h3>"
      htmlString +=   "<p>"+obj.task+"</p>"
      htmlString += "</div>"
      htmlString += "<div class='content-box teacher-demo'>"
      htmlString +=   "<h4>Demo</h4>"
      htmlString +=   "<img src='"+obj.link+"' alt='effect'>"
      htmlString += "</div>"

  return htmlString
}

var tasks = [
  { 
    html_id: "pig-latin",
    task: "Make the list read in pig latin",
    link: "https://media.giphy.com/media/26tn3yvHAYaf7QAgw/giphy.gif"
  },
  {
    html_id: "blow-up",
    task: "By manipulating the <code> &lt;div class='circle'&gt; </code> DOM element in JS, make the circle double height and width until its width is greater-than/equal-to 320px." +
          "</br></br>"+
          "At that point make it reduce back to its original size of 40px x 40px ",
    link: "https://media.giphy.com/media/I02FPwgjBgMZa/giphy.gif"
  },
  {  
    html_id: "reverse-squares",
    task: "Flip the squares to opposite order",
    link: "https://media.giphy.com/media/3o85xJiq8goiag3UVG/giphy.gif"
  }
]

function findEl(els, fn){
  var foundEl = {}
  for (var i = 0; i < els.length; i++){
    
    if (fn(els[i],i,els) === true){
      foundEl = {
        el: els[i],
        index: i
      }
      break;
    } 
  }

  return foundEl
}

var exercises =  qsAll('.exercise-container')
tasks.forEach(function(t, i){
  var cssSelector="#"+t.html_id

  var el = findEl( exercises , function(el,i){
    return el.id === t.html_id
  })

  qs(cssSelector).innerHTML = generatePromptAndDemoHTML(t,el.index ) + qs(cssSelector).innerHTML
})


