// console is een object met een log #function
console.log('ai wroko');

// sla dit element op als een variable (binding)
const myLittleButton = document.querySelector('button')

// javascript werkt met de dot-notation, buttonPressed is een call back function
myLittleButton.addEventListener('click', moveParagraph)



function moveParagraph () {
    // select paragraph
    const p = document.querySelector('p')

    // add class to paragraph
    p.classList.toggle('moveit')

    // change custom property setting the oppacity
    p.style.setProperty('--opac', 1)
}

// conventions
// use a named callback function instead of unanimous functions
// use meaningful names for variables and functions
// never set styling directly from javascript, pass values through a custom property
// always use a button to trigger an action
// follow the same order in javascript as wel as in HTML
