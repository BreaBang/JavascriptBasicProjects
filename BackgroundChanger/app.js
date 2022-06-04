const colors = 
["rgb(205,92,92)", 
"rgb(128,0,0)", 
"rgb(205,92,92)", 
"rgb(139,0,0)", 
"rgb(165,42,42)", 
"rgb(178,34,34)", 
"rgb(220,20,60)", 
"rgb(255,0,0)", 
"rgb(255,215,0)",
"rgb(240,128,128)",
"rgb(112,128,144)",
"rgb(253,245,230)",
"rgb(255,228,225)",
"rgb(188,143,143)",
"rgb(160,82,45)",
"rgb(255,250,205)",
"rgb(255,105,180)",
"rgb(219,112,147)",
"rgb(128,0,128)",
"rgb(72,61,139)",
"rgb(75,0,130)",
"rgb(0,0,255)",
"rgb(0,0,128)",
"rgb(135,206,235)",
"rgb(173,216,230)",
"rgb(0,191,255)",
"rgb(60,179,113)",
"rgb(46,139,87)",
"rgb(144,238,144)",
"rgb(0,128,0)",
"rgb(0,0,110)",
"rgb(0,0,105)",
"rgb(0,0,80)",
"rgb(0,140,0)",
"rgb(0,80,0)",
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
//get random number between 0 - 3. Why 0 - 3? Because we have four elements in our array and the index starts at 0. 
 const randomNumber = getRandomNumber();  
 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent = colors[randomNumber]
});

function getRandomNumber (){
    //floor rounds down to the closest integer
    return Math.floor(Math.random() * colors.length);
}



