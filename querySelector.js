_________________________________________________________________querySelector()_________________________________________________________________________



// The querySelector() method returns the first element that matches a CSS selector.
// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
// If no matches are found, null is returned. 




<div id="div1">
  <p>this is a paragraph inside the div1</p>
</div>

<div id="div2">
  <p>this is a paragraph inside the div2</p>
</div>

<script>
    let a = document.querySelector("#div1");
    console.log(a);      //returns the element with id="div1"
</script>








    <p id="demo" class ="one para">this is a paragraph 1</p>
    <p id="demo" class ="two para">this is a paragraph 2</p>
    <p id="demo" class ="three para">this is a paragraph 3</p>
    <p id="demo" class ="four para">this is a paragraph 4</p>
    <p id="demo" class ="five para">this is a paragraph 5</p>

    <script>
    let y =document.querySelector('p.two');    //id is accessed by # and class is accessed by dot (.)
    console.log(y);                            // will print element <p> with class="two"
    </script>





// but if:




    <script>
    let y =document.querySelector('.para');    //id is accessed by # and class is accessed by dot (.)
    console.log(y);                            // will print only first element with class"para"
    </script>







// to select all the elements with the given selector, we use:
_________________________________________________________________querySelectorAll()_________________________________________________________________________


      <p id="demo" class ="one para">this is a paragraph 1</p>
      <p id="demo" class ="two para">this is a paragraph 2</p>
      <p id="demo" class ="three para">this is a paragraph 3</p>
      <p id="demo" class ="four para">this is a paragraph 4</p>
      <p id="demo" class ="five para">this is a paragraph 5</p>
  
      <script>
      let y =document.querySelectorAll('.para');    //selecting all the elements with class="para"
      console.log(y);                            // will print element all the elements with class="para"
      </script>






________________________________________________________________Examples________________________________________________________________________________
  
  








