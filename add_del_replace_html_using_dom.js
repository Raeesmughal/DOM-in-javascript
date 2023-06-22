__________________________________________________________________________createElement()______________________________________________________________________________



// createElement is used to create a new element in HTML document with the given tag as:


document.createElement("h1")


//the tag will not be shown in the HTML document because it has no text inside








__________________________________________________________________________createTextNode()______________________________________________________________________________


//creates a text node that is generally created to enter inside the element, we just created above example

document.createTextNode('this is the new line')  //actually this is the text that we will enter inside the element, we just created


let doc = document.createTextNode('this is a paragraph in the HTML document');   //putted into a variable to execute it in document

document.write(doc)    //this will print the result in the form of object like : [object Text]




//but the below code will give the exact text of the textNode

docuemnt.write(doc.nodeValue)










__________________________________________________________________________appendChild()______________________________________________________________________________



// used to append an element or text node inside anonter element


let tag = document.createElement('h1');       // creating <h1> element in document
let line = document.createTextNode('this is text appended inside the <h1> , created with DOM');  // content for putting inside the element created.

tag.appendChild(line)    // appending text node inside the <h1> element


// where 'tag' and 'line' are variables

// tag variable contains the created element

// line variable contains the content to append

// tag variable comes before the .appendChild because the content is to be appended inside it
// line variable comes after because it has to apppend inside the tag



// we have created the element and entered content inside it....now its time to embed it in the document




// again use append


let embed = document.body;   // document.body is the root node to access the body of document
                             // we putted it inside the variable to use it later(easily)

embed.appendChild(tag)       // embeding the element, created with DOM, inside the body


// we can also embed it inside any element like:


let embed = document.getElementById('div1')    // accessing the HTML tag having id='div1'

embed.appendChild(tag)   // appending the element created inside it




           _______example_________
           
           
           
      <div id="div1">
        
             <h1 id="heading"> this is the heading </h1>

      </div>
      
      <script>
               
      let element = document.createElement('p');    //creating element

      let text = document.createTextNode('hello world');    // text for element

      element.appendChild(text);      // appending text inside the element

      let doc = document.getElementById("div1");   //accessing the element in which the new element is to be append

      doc.appendChild(element);   //appending element

      </script>
           
           
           
           
           
//this element comes after the <h1> in document

// to get it before the element before the <h1>, use insertBefore():

__________________________________________________________________________insertBefore()______________________________________________________________________________

// syntax:

element.insertBefore(one,two)

// where element is a variable that contains the parent in which the element is to be append
// one is the (DOM created) element  that will come before the two
// two is the element form which we want our element comes before


      <div id="div1">
        
        <h1 id="heading"> this is the heading </h1>

      </div>
      

      <script>
          
      let created = document.createElement('p');    //creating element

      let textForIt = document.createTextNode('hello world');  // text for element

      created.appendChild(textForIt);  //appending text in the element

      let element = document.getElementById('div1');  // accessing the parent element in which the (DOM created) element is to be append

      let comesAfter = document.getElementById('heading'); // accessing the element from which we want our (DOM created) element comes before

      element.insertBefore(created,comesAfter)

      </script>









// for replacing element we use:
__________________________________________________________________________replaceChild()______________________________________________________________________________


parentElement.replaceChild(newElement,oldElement)

//parentElement is the element in which we are doing the changes by replacing its child
// newElement is the child which we want to print in place of oldElement
// oldElement is the child which we want to replace





           _______example_________
           
           

    <div id="parentDiv">
        <p id="div1">this is first paragraph</p>     //element to be replaced with new one
        <p id="div2">this is second paragraph</p>
      </div>
      
      <script>
      let newElement= document.createElement('p');   //creating element 

      let textForIt = document.createTextNode('this is new paragraph');   // text for it

      newElement.appendChild(textForIt);  //appending text inside the element

      let parentElement = document.getElementById('parentDiv');    // accessing the parent element


      let oldElement = document.getElementById('div1');    // accessing the element to be replaced with new one


      parentElement.replaceChild(newElement,oldElement)   // replacing the element
      </script>












__________________________________________________________________________remove()______________________________________________________________________________


// the is very simple way to remove an element from HTML document

 
       _________using variable___________
 
let elementToBeDeleted = document.getElementById('heading');



elementToBeDeleted.remove();





       _________without variable___________


 document.getElementById('heading').remove();






// limitation : don't work with older browsers 


// so we use parent node to remove child node:

__________________________________________________________________________removeChild()______________________________________________________________________________





let parent = document.body;    // accessing the body as  the parent

let element = document.getElementById('heading');    // accessing the child of body with id='heading' to be removed
                                                     // remember the element should be the exact child of the body

parent.removeChild(element)   // removing element






//removing the chld element from the parent element


<div id="div1">
  <h1 id="heading"> this is the heading to be removed </h1>
</div>

<script>
let parent = document.getElementById('div1');
let child = document.getElementById('heading');
parent.removeChild(child)
</script>

















__________________________________________________________________________cloneNode()______________________________________________________________________________


(w3school)

The cloneNode() method creates a copy of a node, and returns the clone.

The cloneNode() method clones all attributes and their values.

Set the deep parameter to true if you also want to clone descendants (children).




  // example : how to use cloneNode():


    let a = document.getElementById('dino')
    let b = a.cloneNode(true);

    let c = document.getElementById('ul');
    c.replaceChild(b,c.firstElementChild)


  



