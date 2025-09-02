- 🌐 **Live Link** : https://sohag-ali.github.io/Emergency-Hotline/


### Answer to the question No 01 :

getElementById targets HTML elements that have a unique id attribute.
This searches the entire HTML document for elements with the specified class.
querySelector returns the first element in the document that matches a given CSS selector.
querySelectorAll returns all elements that match a given CSS selector.

### Amswer to the question No 2 :

Create a new element
const newDiv = document.createElement('div');
Insert a new element
const textContent = document.createTextNode('This is new content.');
newDiv.appendChild(textContent);

### Answer to the question No 03 :

When you interact with something on a webpage — say you click a button inside a box — the event doesn’t just stay with that button. Instead, the browser lets the event “bubble up” through the layers of elements that contain it.

step 1 : You interact with an element
 you click a button inside a div.

step 2 :The event first happens on the target element
The browser says: “Okay, the button was clicked” and fires any event listeners attached directly to that button.

step 3 :Then it moves upward to the parent
After finishing with the button, the same event automatically moves up to the parent container (the div).
If the parent has an event listener, that runs too.

step 4 : It keeps going up the chain
From parent → grandparent → body → document → window.
Each ancestor has the chance to “react” to the same event.

step5 : Unless you stop it
If you don’t want the event to keep going up, you call.

<div id="parent">
  <button id="child">Click Me</button>
</div>

child.addEventListener("click", () => {
  console.log("Button says: I was clicked!");
});

parent.addEventListener("click", () => {
  console.log("Parent says: I noticed the click too!");
});

document.body.addEventListener("click", () => {
  console.log("Body says: I also caught that click!");
});

### Answer to the question On 4 :

Event Delegation is a JavaScript technique where instead of attaching an event listener to every single child element, you attach just one listener to a common parent element.

That parent uses the event’s bubbling behavior to “catch” clicks (or other events) from its children.
Then, you check which child was actually clicked using event.target.

1. Performance-Friendly: Imagine you have 100 list items. Instead of adding 100 event listeners, you add just one to the parent.Less memory used, faster performance.

2. Works for Dynamic Elements: If new child elements are added later (like adding a new list item), you don’t need to add new listeners.
The parent listener will still catch them.

3. Cleaner Code: You manage events in one place instead of spreading listeners everywhere.


### Answer to the question No 5 :

1. preventDefault() : Meaning: Tells the browser Don’t do your usual job for this event.It stops the default action of the element.The event will still bubble up to parent elements unless you also stop it.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); 
  console.log("Form submission prevented");
});


2. stopPropagation():Meaning: Tells the browser Don’t pass this event to any parent elements. It stops the event flow (bubbling or capturing).The default action still happens unless you also call preventDefault().

child.addEventListener("click", (e) => {
  e.stopPropagation(); 
  console.log("Child clicked only");
});

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});


## ⚙️ Technology Stack

- HTML
-  Tailwind CSS , DaisyUI
- JavaScript ( Vanilla only)



