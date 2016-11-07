//  document.getElementById('outerdiv').style.backgroundColor = "aqua";

//   var changeText = function (){
//                 if (document.getElementById('t1').innerHTML === "Welcome to our Book Store") {
//                 document.getElementById('t1').innerHTML = "Read more books";
//                 } else {
//                   document.getElementById('t1').innerHTML = "Welcome to our Book Store";
//                 }
//               }
// document.getElementById('t1').onclick = changeText;

//Hadas's version
//  function createbtn(){
//  var btn = document.createElement('button');
//  btn.id = 'repeatButton';
//  btn.innerHTML = 'Kuckoo';
//  document.getElementById('outerdiv').appendChild(btn);
// btn.onclick = createbtn;
// }

// createbtn();

//Dave's version
//Create function
function avivsFunction(){
//Telling the DOM to create an element of the type button, with the name btn
var btn = document.createElement('button');
//Give the button an id attribute
btn.id = 'pushButton';
//Give the button actual text so that it is visible
btn.innerHTML = 'Avivs Button';
//Append the button to a specific element named outerdiv
document.getElementById('outerdiv').appendChild(btn);
//When the button is clicked, run the function (again)
btn.onclick = avivsFunction;
}

avivsFunction();
























 