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























