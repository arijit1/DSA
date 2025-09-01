//You have a <div> and you want to insert a new <p>Hello</p> at the very start of that <div> (not at the end).

{/* <div id="div">
    <p>1</p>
    <p>2</p>
  </div> */}

let ele = document.getElementById("div");
let ele2 = document.createElement("p");
ele2.innerHTML = "helloworld";
//ele.appendChild(ele2)
//ele.prepend(ele2)
ele.insertBefore(ele2,ele.firstChild)

//Follow-up: If you needed to insert <p> just before a specific child element (say before the 2nd child), how would you do it?
const newP = document.createElement("p");
newP.textContent = "Hello";
const secondChild = ele.children[1]; 
ele.insertBefore(newP,secondChild)

//With modern DOM APIs you don’t always need insertBefore. You can target the element directly and call
const newEle = document.createElement("p");
newEle.textContent = "Hello";
secondChild = ele.children[1]; 
secondChild.before(newP); //If you wanted it before the 2nd child:
secondChild.after(newP); //If you wanted it after the 2nd child: