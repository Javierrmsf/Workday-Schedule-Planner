
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

/////Moment 
var dateelement = document.getElementById('currentDay')


var time = moment().format("hh:mm:ss, MMM Do, YYYY");

var time2 = Number (moment().format("HH"));



 dateelement.innerHTML = time ;







console.log(time);
console.log(time2)

/////9AM


if (storedinput9am){
    textinput9am.innerHTML = storedinput9am
}

const Savenotes9 = () => {
    console.log (textinput9am.value)
localStorage.setItem('textinput9',textinput9am.value )


}

button9am.addEventListener('click', Savenotes9 );



if((time2 > 09)||(time2 === 00)) {

    document.getElementById('9amtext').className = 'col-10 description border past';

}
else if (time2 === 09)
{
    document.getElementById('9amtext').className = 'col-10 description border present';
}
else if (time2 < 09 )
{
    document.getElementById('9amtext').className = 'col-10 description border future';
}



///////10AM




if (storedinput10am){
    textinput10am.innerHTML = storedinput10am
}

const Savenotes10 = () => {
    console.log (textinput10am.value)
localStorage.setItem('textinput10',textinput10am.value )

}

button10am.addEventListener("click", Savenotes10 );

if((time2 > 10)||(time2 === 00)) {

    document.getElementById('10amtext').className = 'col-10 description border past';

}
else if (time2 === 10)
{
    document.getElementById('10amtext').className = 'col-10 description border present';
}
else
{
    document.getElementById('10amtext').className = 'col-10 description border future';
}

////////11AM


if (storedinput11am){
    textinput11am.innerHTML = storedinput11am
}

const Savenotes11 = () => {
    console.log (textinput11am.value)
localStorage.setItem('textinput11',textinput11am.value )

}

button11am.addEventListener("click", Savenotes11 );

if((time2 > 11)||(time2 === 00)) {

    document.getElementById('11amtext').className = 'col-10 description border past';

}
else if (time2 === 11)
{
    document.getElementById('11amtext').className = 'col-10 description border present';
}
else
{
    document.getElementById('11amtext').className = 'col-10 description border future';
}

/////////12PM

if (storedinput12pm){
    textinput12pm.innerHTML = storedinput12pm
}

const Savenotes12 = () => {
    console.log (textinput12pm.value)
localStorage.setItem('textinput12',textinput12pm.value )

}

button12pm.addEventListener("click", Savenotes12 );

if((time2 > 12)||(time2 === 00)) {

    document.getElementById('12pmtext').className = 'col-10 description border past';

}
else if (time2 === 12)
{
    document.getElementById('12pmtext').className = 'col-10 description border present';
}
else
{
    document.getElementById('12pmtext').className = 'col-10 description border future';
}

/////////1PM

if (storedinput1pm){
    textinput1pm.innerHTML = storedinput1pm
}

const Savenotes1 = () => {
    console.log (textinput1pm.value)
localStorage.setItem('textinput1',textinput1pm.value )

}

button1pm.addEventListener("click", Savenotes1 );

if((time2 > 13)||(time2 === 00)) {

    document.getElementById('1pmtext').className = 'col-10 description border past';

}
else if (time2 === 13)
{
    document.getElementById('1pmtext').className = 'col-10 description border present';
}
else
{
    document.getElementById('1pmtext').className = 'col-10 description border future';
}

/////////2PM

if (storedinput2pm){
    textinput2pm.innerHTML = storedinput2pm
}

const Savenotes2 = () => {
    console.log (textinput2pm.value)
localStorage.setItem('textinput2',textinput2pm.value )

}

button2pm.addEventListener("click", Savenotes2 );

if((time2 > 14)||(time2 === 00)) {

    document.getElementById('2pmtext').className = 'col-10 description border past';

}
else if (time2 === 14)
{
    document.getElementById('2pmtext').className = 'col-10 description border present';
}
else
{
    document.getElementById('2pmtext').className = 'col-10 description border future';
}

////////3PM

if (storedinput3pm){
    textinput3pm.innerHTML = storedinput3pm
}

const Savenotes3 = () => {
    console.log (textinput3pm.value)
localStorage.setItem('textinput3',textinput3pm.value )

}

button3pm.addEventListener("click", Savenotes3 );

if((time2 > 15)||(time2 === 00)) {

    document.getElementById('3pmtext').className = 'col-10 description border past';

}
else if (time2 === 15)
{
    document.getElementById('3pmtext').className = 'col-10 description border present';
}
else
{
    document.getElementById('3pmtext').className = 'col-10 description border future';
}

//////////4PM

if (storedinput4pm){
    textinput4pm.innerHTML = storedinput4pm
}

const Savenotes4 = () => {
    console.log (textinput4pm.value)
localStorage.setItem('textinput4',textinput4pm.value )

}

button4pm.addEventListener("click", Savenotes4 );

if((time2 > 16)||(time2 === 00)) {

    document.getElementById('4pmtext').className = 'col-10 description border past';

}
else if (time2 === 16)
{
    document.getElementById('4pmtext').className = 'col-10 description border present';
}
else
{
    document.getElementById('4pmtext').className = 'col-10 description border future';
}

//////////5PM

if (storedinput5pm){
    textinput5pm.innerHTML = storedinput5pm
}

const Savenotes5 = () => {
    console.log (textinput5pm.value)
localStorage.setItem('textinput5',textinput5pm.value )

}

button5pm.addEventListener("click", Savenotes5 );

if((time2 > 17)||(time2 === 00)) {

    document.getElementById('5pmtext').className = 'col-10 description border past';

}
else if (time2 === 17)
{
    document.getElementById('5pmtext').className = 'col-10 description border present';
}
else
{
    document.getElementById('5pmtext').className = 'col-10 description border future';
}