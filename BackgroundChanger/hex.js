const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#
const btn = document.getElementById('btn')
const color = document.querySelector(".color");

btn.addEventListener('click', function (){
    //variable that holds our hashtag for the color value. Using let because the value will change. 
    let hexColor = '#';
    //setting up a loop to pull six items from the array. Starts at 0 because the index starts at 0. Wont get to six because 0, 1, 2, 3, 4, 5 is six elements.
    for(let i = 0; i <6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    
})
//setting up the function to make it random
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}