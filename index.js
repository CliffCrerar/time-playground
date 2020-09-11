// Import stylesheets
import './style.css';

const byId = (id) => document.getElementById(id)

// Write Javascript code!
const appDiv = byId('header');
appDiv.innerHTML = `<h1>TIME PLAYGROUND</h1>`;

console.log(moment.now())

const date = new Date();

setInterval(()=>{
  byId('time').innerHTML = new Date();
  byId('moment-time').innerHTML = moment.now()
},1)

// var addEventListener = Object.assign(document.addEventListener);
const inputOne = document.createElement('input');

inputOne.name='date';
inputOne.type='date'

const timetool = moment();
  const gridOne = byId('grid-1');
  const gridTow = byId('grid-2');
  let selected;

inputOne.addEventListener('change',function(ev){
  console.log(ev)
  byId('difTwo').innerHTML = new Date(ev.target.value).toLocaleString()
  
  selected = moment(ev.target.value);
     
  // byId('difThree').innerHTML = moment().diff(ev.target.value, 'years').toString();

   gridTow.innerHTML = '';
  ['second','minutes','hours','days','weeks','months','year']
  .forEach(item=>{

    const innerHTML = gridTow.innerHTML;
    gridTow.innerHTML = innerHTML + dateDiff(selected,item)
  
  // moment(Date.now()).diff(ev.target.value,  'years').toString();

  })
});
// 

function dateDiff(ti, d){
  const timeToolResult = timetool.diff(ti,d);
  const futureText = 'In the future';
  const pastText = 'In the past';

  return `<div>${d}:</div><div id="difThree" class="value">${Math.abs()}</div>`
}

byId('difOne').appendChild(inputOne);



// moment().diff('Fri Sep 11 2019 14:41:13 GMT+0200 (South Africa Standard Time)', 'years')

