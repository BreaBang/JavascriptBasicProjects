// set initial value to zero for count
let count = 0;


//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//using forEach we pass in a callback function to access each item using parameters
//adding and event listener to all the buttons 
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        //figuring out which classes the item has
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
        //decrase the count - see first variable
            count--;
        } else if(styles.contains('increase')) {
        //adding to count
            count ++;
        } else {
            count = 0;
        }
        //changing the color
        //if the value of count is over zero it will change the span to green
        if(count > 0){
            value.style.color = 'green';
        }
        if (count < 0){
            value.style.color = 'red';
        // very important to use three = here as to not reassign the value
        } if (count === 0){
            value.style.color = 'black';
        }
        //the variable that holds the value - set the text showing value equal to the variable count. 
        value.textContent = count;
    });
});
