let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/polar-bear.jpg') {
      myImage.setAttribute ('src','images/swimming-polar-bear.jpg');
    } else {
      myImage.setAttribute ('src','images/polar-bear.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + "," + ' how much does a polar bear weigh?';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + "," + ' how much does a polar bear weigh?';
}
myButton.onclick = function() {
  setUserName();
}