
///adding the local storage function to the text in each hour of the day

var textinput9am = document.getElementById('9amtext');
var button9am = document.getElementById('9ambutton');
var storedinput9am = localStorage.getItem('textinput9');

var textinput10am = document.getElementById("10amtext");
var button10am = document.getElementById("10ambutton");
var storedinput10am = localStorage.getItem('textinput10');

var textinput11am = document.getElementById('11amtext');
var button11am = document.getElementById('11ambutton');
var storedinput11am = localStorage.getItem('textinput11');

var textinput12pm = document.getElementById('12pmtext');
var button12pm = document.getElementById('12pmbutton');
var storedinput12pm = localStorage.getItem('textinput12');

var textinput1pm = document.getElementById('1pmtext');
var button1pm = document.getElementById('1pmbutton');
var storedinput1pm = localStorage.getItem('textinput1');

var textinput2pm = document.getElementById('2pmtext');
var button2pm = document.getElementById('2pmbutton');
var storedinput2pm = localStorage.getItem('textinput2');

var textinput3pm = document.getElementById('3pmtext');
var button3pm = document.getElementById('3pmbutton');
var storedinput3pm = localStorage.getItem('textinput3');

var textinput4pm = document.getElementById('4pmtext');
var button4pm = document.getElementById('4pmbutton');
var storedinput4pm = localStorage.getItem('textinput4');

var textinput5pm = document.getElementById('5pmtext');
var button5pm = document.getElementById('5pmbutton');
var storedinput5pm = localStorage.getItem('textinput5');


if (storedinput9am){
    textinput9am.innerHTML = storedinput9am
}

const Savenotes9 = () => {
    console.log (textinput9am.value)
localStorage.setItem('textinput9',textinput9am.value )


}

button9am.addEventListener('click', Savenotes9 );





/////////////////////////////////////////////////////////////////////




if (storedinput10am){
    textinput10am.innerHTML = storedinput10am
}

const Savenotes10 = () => {
    console.log (textinput10am.value)
localStorage.setItem('textinput10',textinput10am.value )

}

button10am.addEventListener("click", Savenotes10 );

////////////////////////////////////////////////////////////////////////
