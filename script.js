// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// PART ONE
//1. Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector('main');
console.log(mainEl);

//2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";

//3. Set the content of mainEl to <h1>DOM Manipulation</h1>. 
// There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// mainEl.textContent = 'DOM Manipulation'
mainEl.innerHTML = '<h1> DOM Manipulation </h1>'

//4. Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

// Part 2: Creating a Menu Bar
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.querySelector('#top-menu');

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// PART 3
// Iterate over the entire menuLinks array and for each "link" object:
// let menuLinks = document.querySelectorAll('menu links');
menuLinks.forEach(menuLinks => {
    // Create an <a> element.
    const menuLink = document.createElement('a');
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    menuLink.setAttribute('href', 'link.href');
    // Set the new element's content to the value of the text property of the "link" object.
    menuLink.append(menuLinks.text);
    // Append the <a> element to the topMenuEl element
    document.getElementById('top-menu').appendChild(menuLink);
});

// PART TWO (RLAB316.3.1)
//Part 1 & 2 added to css and html

// Part 3
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu');
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

// Part 4: Adding Menu Interaction
// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenulinks = topMenuEl.querySelectorAll('a');
// 2. Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function (evt){
  // The first line of code of the event listener function should call the event object's preventDefault() method.
evt.preventDefault();
// The second line of code of the function should immediately return if the element clicked was not an <a> element.
if (evt.target !== 'A'){
  console.log('not a link');
  return;
}
// 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
const clicked = evt.target;
clicked.classList.toggle('active');
// 2. The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!
topMenulinks.forEach(link => {
  if (link !== clicked){
    link.classList.remove('active')
  }
});
const subMenuLink = menuLinks.find(item => item.text === clicked.innerText);
if (subMenuLink && subMenuLink.subLinks){
  subMenuEl.style.top = '100%';
} else {
  subMenuEl.style.top = '0';
}
});
// Part 5: Adding Submenu Interaction
// Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.


