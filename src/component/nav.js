import React, { useState } from 'react';

 function nav({list}) {
     
    // const [val , setVal]= useState("");
    // const Num = ({list})=>{
       
    //     const num=list.length
       
    //     setVal(num)
    //     }
    

    return (
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
   
    </span>
    {/* //event function */}
  </div>
</nav> 
       
    )
}
export default nav;
