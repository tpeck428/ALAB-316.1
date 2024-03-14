//Part One: Getting Started

//Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector('main');
console.log(mainEl);

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

//Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

//Add a class of flex-ctr to mainEl.
mainEl.classList = 'flex-ctr';