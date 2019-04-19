
var con = 0;
function getPost(){
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) =>{
        return res.json();
    })
    .then((post) =>{
        document.getElementById("title-1").innerHTML = post[0].title;
        document.getElementById("title-2").innerHTML = post[1].title;

        // for (let i = 0; i < 2; i++){
        //     let body = post[i].body;
        //     body = body.replace("\n", "<br>");
        //     document.getElementById("body-" + i.toString(10)).innerHTML = body;
        //     document.getElementById("body-1").innerHTML = "hi";
        // }
        for (let index = 0; index < 2; index++){
            let body = post[index].body;
            let string_body = "body-" + index.toString();
            body = body.replace("\n", "<br>");
            if (index == 0){
            document.getElementById("body-1").innerHTML = body;
            }
            else{
            document.getElementById("body-2").innerHTML = body;
            }
        }

    })
} getPost();


function getComments1(){
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then((res) =>{
        return res.json();
    })
    .then((post) =>{
        for (let index = 0; index < 2; index++){
            let body = post[index].body;
            let string_body = "body-" + index.toString();
            body = body.replace("\n", "<br>");
            if (index == 0){
            document.getElementById("com-1").innerHTML = body;
            }
            else{
            document.getElementById("com-2").innerHTML = body;
            }
        }
    })
}

function getComments2(){
    fetch('https://jsonplaceholder.typicode.com/comments?postId=2')
    .then((res) =>{
        return res.json();
    })
    .then((post) =>{
        for (let index = 0; index < 2; index++){
            let body = post[index].body;
            let string_body = "body-" + index.toString();
            body = body.replace("\n", "<br>");
            if (index == 0){
            document.getElementById("com-3").innerHTML = body;
            }
            else{
            document.getElementById("com-4").innerHTML = body;
            }
        }
    })
}


(function (window) {
    'use strict';
    const BUTTON_SELECTOR = '[data-posts="id"]';
  
    let buttons = document.querySelectorAll(BUTTON_SELECTOR);
  
    buttons.forEach(function (button) {
      'use strict';
  
      let sectionSelector = `#comments-${button.value}`;
      let commentSection = document.querySelector(sectionSelector);
    
      getComments1();
      getComments2();
      button.addEventListener('click', function (event) {
        if (commentSection.hidden) {
          commentSection.hidden = false;
          button.textContent = 'Hide comments';
        } else {
          commentSection.hidden = true;
          button.textContent = 'Show comments';
        }



        event.preventDefault();
      });
    });
  })(window);