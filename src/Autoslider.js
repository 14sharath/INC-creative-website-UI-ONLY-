import { useState, useEffect } from 'react';

import "./Home.css";
import mainimg9 from  "./images/imagee10.jpg";
import mainimg10 from "./images/image11.jpg";

// import React, { useState, useEffect } from 'react';

export const Autoslider = () => {
  

  return (
    <div>






<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
    <div className="row mt-5 pandt">

<div className="col climax3">
 
<i class="bi bi-quote"></i>

<p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit eaque magnam saepe provident dolor, tempora molestias facere voluptatem velit soluta id, assumenda exercitationem expedita. Nesciunt amet repellat placeat magnam?
</p>  
  <div className="picandtext d-flex mt-4">
   <div className="pic">
    <img src={mainimg9} alt=""/>
   </div>

   <div className="text">
    <h3 class="fw-bold">CHAIRMAN</h3>
   </div>
  </div>

</div>

<div className="col climax3">
       

<i class="bi bi-quote"></i>

<p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit eaque magnam saepe provident dolor, tempora molestias facere voluptatem velit soluta id, assumenda exercitationem expedita. Nesciunt amet repellat placeat magnam?
</p>  
  <div className="picandtext d-flex mt-4">
   <div className="pic">
    <img src={mainimg10} alt=""/>
   </div>

   <div className="text">
    <h3 class="fw-bold">MANAGER</h3>
   </div>
  </div>

</div>
<div className="col climax3">
 

<i class="bi bi-quote"></i>

<p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit eaque magnam saepe provident dolor, tempora molestias facere voluptatem velit soluta id, assumenda exercitationem expedita. Nesciunt amet repellat placeat magnam?
</p>  
  <div className="picandtext d-flex mt-4">
   <div className="pic">
    <img src={mainimg9} alt=""/>
   </div>

   <div className="text">
    <h3 class="fw-bold">CEO</h3>
   </div>
  </div>
</div>
</div>
    </div>







    <div class="carousel-item" data-bs-interval="2000">
               <div className="row mt-5 pandt">

<div className="col climax3">
 
<i class="bi bi-quote"></i>

<p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit eaque magnam saepe provident dolor, tempora molestias facere voluptatem velit soluta id, assumenda exercitationem expedita. Nesciunt amet repellat placeat magnam?
</p>  
  <div className="picandtext d-flex mt-4">
   <div className="pic">
    <img src={mainimg9} alt=""/>
   </div>

   <div className="text">
    <h3 class="fw-bold">CHAIRMAN</h3>
   </div>
  </div>

</div>

<div className="col climax3">
       

<i class="bi bi-quote"></i>

<p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit eaque magnam saepe provident dolor, tempora molestias facere voluptatem velit soluta id, assumenda exercitationem expedita. Nesciunt amet repellat placeat magnam?
</p>  
  <div className="picandtext d-flex mt-4">
   <div className="pic">
    <img src={mainimg10} alt=""/>
   </div>

   <div className="text">
    <h3 class="fw-bold">MANAGER</h3>
   </div>
  </div>

</div>
<div className="col climax3">
 

<i class="bi bi-quote"></i>

<p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit eaque magnam saepe provident dolor, tempora molestias facere voluptatem velit soluta id, assumenda exercitationem expedita. Nesciunt amet repellat placeat magnam?
</p>  
  <div className="picandtext d-flex mt-4">
   <div className="pic">
    <img src={mainimg9} alt=""/>
   </div>

   <div className="text">
    <h3 class="fw-bold">CEO</h3>
   </div>
  </div>
</div>
</div>
    </div>


    <div class="carousel-item" data-bs-interval="2000">
             <div className="row mt-5 pandt">

<div className="col climax3">
 
<i class="bi bi-quote"></i>

<p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit eaque magnam saepe provident dolor, tempora molestias facere voluptatem velit soluta id, assumenda exercitationem expedita. Nesciunt amet repellat placeat magnam?
</p>  
  <div className="picandtext d-flex mt-4">
   <div className="pic">
    <img src={mainimg9} alt=""/>
   </div>

   <div className="text">
    <h3 class="fw-bold">CHAIRMAN</h3>
   </div>
  </div>

</div>

<div className="col climax3">
       

<i class="bi bi-quote"></i>

<p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit eaque magnam saepe provident dolor, tempora molestias facere voluptatem velit soluta id, assumenda exercitationem expedita. Nesciunt amet repellat placeat magnam?
</p>  
  <div className="picandtext d-flex mt-4">
   <div className="pic">
    <img src={mainimg10} alt=""/>
   </div>

   <div className="text">
    <h3 class="fw-bold">MANAGER</h3>
   </div>
  </div>

</div>
<div className="col climax3">
 

<i class="bi bi-quote"></i>

<p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit eaque magnam saepe provident dolor, tempora molestias facere voluptatem velit soluta id, assumenda exercitationem expedita. Nesciunt amet repellat placeat magnam?
</p>  
  <div className="picandtext d-flex mt-4">
   <div className="pic">
    <img src={mainimg9} alt=""/>
   </div>

   <div className="text">
    <h3 class="fw-bold">CEO</h3>
   </div>
  </div>
</div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>    // <script src={}/>
  );
};

