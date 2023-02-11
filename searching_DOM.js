this is the process of finding and accessing the HTML elements in the document



_________________________________________________________________________getElementById()______________________________________________________________________



// selects the element by its id


// If the element is found, the method will return the element as an object (in element).

// If the element is not found, element will contain null.


  <h1 id="heading">this is DOM</h1>

  <script>
   let a=document.getElementById('heading');
   console.log(a)      //this will return the element as an object
   console.log(typeof a)   //object
  </script>


but if we use .innerHTML property , it will access its inner html


let a = document.getElementById('heading').innerHTML;
console.log(a);               // this will return the text inside the <h1> in the form of string
console.log(typeof a);        // string








_________________________________________________________________________getElementsByClassName()_________________________________________________________________




// selects all the elements with that class








   <div>
        <h1 class="heading" >this is first heading</h1>
        <h1 class="heading" >this is second heading</h1>

   </div>

   <script>
          let a = document.getElementsByClassName('heading');
          console.log(a);    //this will return an object of all the two elements with class="heading"
   </script>



// use index number of the element to access it


let a = document.getElementsByClassName('heading')[0];
console.log(a); //will print the only first element with class="heading"










_________________________________________________________________________getElementsByTagName()__________________________________________________________________



// uses the tag name of the element to select eg: p , h1 , div , span , b etc



<p></p>

<script>
  document.getElementsByTagName('p')[0].innerHTML="this is a paragraph";
</script>


// [0] is the index of the <p> tag in document . this must be defined

// if index is not defined, it will select all the elements with respective name and can't make changes 












_________________________________________________________________________getElementsName()__________________________________________________________________


// access the elements by their name attribute (mainly used in the forms)




<form action="action.php">
  
    <input type='text' name='intro' >    
    <input type='text' name='intro' >    
    
    
    <script>
        document.getElementsByName('intro')[0].value='input field';    // the value is returned only inside the first element because the index is selected as [0]
    </script>
</form>







