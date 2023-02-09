navigation between the nodes





------------------------------------------------------------parentNode----------------------------------------------------




<div id="div1">
    <h1 id="h">this is a heading</h1>
    <p id="p">this is a paragraph</p>
    <span id="sp">this is a span</span>
    <div>this is a div</div>
</div>
<script>
    let selecting = document.getElementById('p').parentNode;


    console.log(selecting); //this will give the parent of the element p with id='p' . that is a div with id='div1'


    console.log(typeof selecting);//this will give the type of the parentNode (which is object)
 </script>




------------------------------------------------------------childNode[node number]----------------------------------------------------



// used to select the node with its node number


//this is used for selecting a child element with its node number(position) starting from 1

<div id="first-div">
        <h1 id="heading" >this is a heading for test </h1>
        <p id="p" >this is a paragraph</p>
      <span id="sp" >this is a span</span>
        </div>
        <script>
            let gettingchild = document.getElementById('first-div').childNodes[1];

            console.log(gettingchild)//this will print an object h1 in the console
            console.log(typeof gettingchild);//this will give the type of the childNode (which is object)
        </script>



//but if selecting the text node of a parent element, we use 0


//above example


 <script>
            let gettingchild = document.getElementById('heading').childNodes[0];

            console.log(gettingchild)//this will print text node of h1
            console.log(typeof gettingchild);//this will give the type of the childNode (which is object)
        </script>











------------------------------------------------------------firstChild----------------------------------------------------


//selects the first child of the element
//even the spaces


 <ul id="list">
        <li>bread</li>
        <li>egg</li>
        <li>jam</li>
        <li>milk</li>
        <li>honey</li>
    </ul>
    <script>
   
       let foodlist = document.getElementById('list').firstChild;

       console.log(foodlist); //this will print the spaces before the first li element as a (text node)

       console.log(typeof foodlist); //object

    </script>




//but if spaces are deleted than
 <ul id="list"><li>bread</li><li>egg</li><li>jam</li><li>milk</li><li>honey</li></ul>
    <script>
   
       let foodlist = document.getElementById('list').firstChild;

       console.log(foodlist); //this will print the first li as object

       console.log(typeof foodlist); //object

    </script>






to overcome this, we use :
------------------------------------------------------------firstElementChild----------------------------------------------------


//this will ignore the spaces and selects the element



<ul id="list">
        <li>bread</li>
        <li>egg</li>
        <li>jam</li>
        <li>milk</li>
        <li>honey</li>
    </ul>
    <script>
   
       let foodlist = document.getElementById('list').firstElementChild;

       console.log(foodlist); //this will print the first li as object

       console.log(typeof foodlist); //object

    </script>











<h1 id="heading" >this is a heading</h1>
<script>
  let printing = document.getElementById('heading').firstElementChild;
console.log(printing);//will print null because there is a text node inside the heading, not the element node
  </script>










<h1 id="heading" >this is a heading</h1>
<script>
  let printing = document.getElementById('heading').firstChild;
console.log(printing);//will print null because there is a text node inside the heading, not the element node
console.log(typeof printing) //this is object
  </script>




but if you use firstChild.nodeValue :



<h1 id="heading" >this is a heading</h1>
<script>
  let printing = document.getElementById('heading').firstChild.nodeValue;
console.log(printing);//will print text in <h1> as string
console.log(typeof printing) //this is string
  </script>





------------------------------------------------------------lastChild----------------------------------------------------

//same as firstChild




<div id="div1">
    <p>this is a paragraph</p>
    <span>this is a span for test</span>
</div>
    <script>
        let p = document.getElementById('div1').lastChild;
        console.log(p);//selects the spaces before the last element as text node
    </script>



//if the spaces before the closing tag of div are deleted, it will select the span








------------------------------------------------------------lastElementChild----------------------------------------------------








<div id="div1">
    <p>this is a paragraph</p>
    <span>this is a span for test</span>
</div>
    <script>
        let p = document.getElementById('div1').lastElementChild;
        console.log(p);//selects the span as an element node
    </script>











------------------------------------------------------------nextSibling----------------------------------------------------

selects the next sibling, dont ignore the spaces




<div id="div1">
    <p id="p">this is a paragraph</p>
    <span>this is a span for test</span>
</div>
    <script>
        let selecting = document.getElementById('p').nextSibling;
        console.log(selecting);//selects the spaces before the next sibling element as text node
    </script>


//if remove the spaces, it selects the span element





to overcome this, we use:





------------------------------------------------------------nextElementSibling----------------------------------------------------





<div id="div1">
    <p id="p">this is a paragraph</p>
    <span>this is a span for test</span>
</div>
    <script>
        let selecting = document.getElementById('p').nextElementSibling;
        console.log(selecting);//selects the span element node
    </script>








------------------------------------------------------------previousSibling----------------------------------------------------



selects the previous sibling



    <h1>this is a heading</h1>
<p id="para">this is a paragraph</p>

<script>
  let previous = document.getElementById('para').previousSibling;
console.log(previous)    //prints the spaces as text node between <p> and <h1>
</script>



//remove the spaces to get <h1>





to overcome this problem we use:
------------------------------------------------------------previousElementSibling----------------------------------------------------



    <h1>this is a heading</h1>
    
    <p id="para">this is a paragraph</p>

<script>
  let previous = document.getElementById('para').previousElementSibling;
console.log(previous)//will print the <h1> as object
</script>
    







------------------------------------------------------------childElementCount----------------------------------------------------

used to count the number of child elements in a parent element


    <div id="div">
        <h1 id="h1">this is a heading</h1>
        <p id="p">this is a paragraph</p>
    </div>
    <script>
        let b = document.getElementById('div').childElementCount;
        console.log(b)    // result is 2
    </script>






examples--------------------------------------------------------------------------------------------------------------------------------------



// giving value to other using innerHTML

    <h1 id="id01">My First Page</h1>
    <p id="id02"></p>
    
    <script>
    document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
    </script>
    

// doing same with navigation of nodes




    <h1 id="id01">My First Page</h1>
    <p id="id02"></p>
    
    <script>
    document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
    </script>




     -------or you can do this---------
      
      


      
         <h1 id="id01">My First Page</h1>
    <p id="id02"></p>
    
    <script>
    document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
    </script>





