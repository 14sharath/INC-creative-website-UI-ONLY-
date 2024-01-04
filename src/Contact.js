import "./Home.css";
import React from 'react';
import logo from "./images/logo.jpg"
import menu from "./images/menu-bar.png"
import footer1 from "./images/footer1.jpg";
import footer2 from "./images/footer2.jpg";
import { useState } from "react";
export const Contact=()=>{
  const [counterStarted,setcounterStarted]=useState(false)
    
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
  };


// navbarscroll

const[isNavwhite,setNavwhite]=useState(false);
const changeNavColor=()=>{

  if (window.scrollY>=600){
    setNavwhite(true)
  }
  else{
    setNavwhite(false)
  }

  
}
window.addEventListener('scroll',changeNavColor)

    return(

        <>
       <div className= {isNavwhite ? "whitenav":"box2"}>
          <div className="container">
          <div className="row navbar">

            <div className="col-3">
              <img src={logo} className='logo'/>
            </div>

            <div className="col-9 navitems text-end">
              <ul className='list-inline'>
              <li className='list-inline-item '>
      <a href="/" className='text-decoration-none li1'>
        HOME
      </a>
    </li>

    <li className='list-inline-item '>
      <a href="/about" className='text-decoration-none li2'>
        ABOUT
      </a>
    </li>

   <li className='list-inline-item droptask'>
      <a href="/project" className='text-decoration-none li3'>
        PROJECTS
      </a>

      <div className="dropdown">
        <div className="projectv1" data-link='/project1'>
          <a href="/project1" className='text-decoration-none'>PROJECT 1</a>
        </div>
        <div className="projectv2">
          <a href="/project2" className='text-decoration-none pv2'>PROJECT 2</a>
        </div>

        {/* <ul className='list-styled-none'>
          <li className='backgp'>
            <a href="">PROKECT1</a>
          </li>

          <li>
            <a href="">PROJECT2</a>
          </li>
        </ul> */}
      </div>
    </li>
    <li className='list-inline-item '>
      <a href="/services" className='text-decoration-none li4'>
        SERVICES
      </a>
    </li>

    

    <li className='list-inline-item '>
      <a href="/contact" className='text-decoration-none li5'>
        CONTACT
      </a>
    </li>
                
                  
                <li className='list-inline-item'>
                  
                  <i class="bi bi-search"></i>
                
                </li>

                
                <li className='list-inline-item'>
                <button className='btn' onClick={toggleSidenav}>
                <i class="fa-solid fa-bars fs-2"></i>
                </button>
                </li>

              </ul>
            </div>
            </div>
            </div>
          </div>
     <div className="contactbox2">
        <div className="container">
        <div className="row contactcontent text-dark">
           <div className="col">
            <p className="fw-bold">CONTACT US</p>
           </div>
        </div>
        </div>
     </div> 



     <div className="contactbox3">
        <div className="container">
            <div className="row">

                <div className="col-7  py-5">

                 <div className="writeacomment p-5">
                  <h1>WRITE A COMMENT</h1>
                 <div className="firtsnameandlastname d-flex mt-4">
                  <div className="fname">
                     <input type="text" className="form-control" placeholder="FIRST NAME"/>
                  </div>

                  <div className="lname text-end">
                  <input type="text" className="form-control" placeholder="SECOND NAME"/>
                  </div>
                 </div>
                 <input type="text" placeholder="SUBJECT" className="form-control mt-4"/>

                 <textarea className="form-control mt-4"  rows="6" placeholder="WRITE A MESSAGE"></textarea>
                </div>
                </div>

                <div className="col-5 py-5">

                      <div className="contactdetails p-5 ">
                       <div className="number mt-4 fw-bold">
                       <h3 className="fw-bold">NUMBER</h3>
                        <h5>7981027597</h5>
                        </div>

                        <div className="email mt-4 fw-bold">
                          <h3 className="fw-bold">EMAIL ADDRESS</h3>
                          <h5>SHARATHCHAND998@GMAIL.COM</h5>
                        </div>

                        <div className="address mt-4 fw-bold">
                          <h3 className="fw-bold">ADDRESS</h3>
                          <h5>KPHB COLONY, HYDERABAD,TELANGANA </h5>
                        </div>
                      </div>
                </div>
            </div>
        </div>






<div className="map mt-5">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.287560467358!2d78.39912300986187!3d17.493781199663985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f30076cb0f%3A0xd71e8dba19e3b3ae!2sKPHB%20METRO!5e0!3m2!1sen!2sin!4v1702937403910!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>








        <div className="footer mt-5">

<div className="container">

  <div className="row f1">

    <div className="col">
    <img src={logo} alt=""/>
    
    <p className="pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nihil eligendi totam, voluptas atque quae quos maiores </p>
     <div className="inandsub d-flex">
     <input type="text" className="input" placeholder="Enter Your Email"></input>

    <a href="#" className="text-decoration-none">subscribe</a>
    </div>

    <div className="footericons mt-3 d-flex">
    <i class="bi bi-instagram"></i>
    <i class="bi bi-threads"></i>
    <i class="bi bi-twitter-x"></i>
    <i class="bi bi-facebook"></i>
    <i class="bi bi-whatsapp"></i>
    </div>

    </div>

    <div className="col">
     <h2>QUICK LINKS</h2>

     <div className="quicklinks d-flex text-capitalize">
      <div className="one">
         <p>about us</p>
        <p>customer care</p>
        <p>team members</p>
        <p>advertisements</p>
        <p>affiliation</p>
      </div>
      <div className="two">
        <p>service</p>
        <p>pricing plans</p>
        <p>career</p>
        <p>return policy</p>       
        <p>affiliation</p>
        <p>terms of use</p>     
     </div>
     </div>
    </div>

    <div className="col">
      <h2>RECENT POSTS</h2>

      <div className="posts1 d-flex">
        
      <img src={footer1} alt=""/>
      <div className="footertext1">
      <h5>LOREM HELLO HELLO BOB MARLEY</h5>

      <p>DEC 5,2023</p>
      </div>

      </div>

      <div className="posts2 d-flex mt-4">

      

  

      <img src={footer2} alt=""/>
        <div className="footertext1">
       <h5>LOREM HELLO HELLO BOB MARLEY</h5>

       <p>DEC 6,2023</p>
        </div>
      </div>

    </div>
  </div>

  <div className="row mt-3 f2">
    <div className="col-6">
        <h2>~ SHARATH CHAND </h2>
    </div>

    <div className="col-6 text-end">
       <h3>CREATED ON DEC 4,2023</h3>
    </div>
  </div>
</div>
</div>


<div className={`sidenav ${isSidenavOpen ? 'open' : 'close'} `}>

<div className="logoandicon">
<div className="logo">
<img src={logo} alt=""/>  
</div>  
<div className="andicon">
 <button className='btn cross' onClick={toggleSidenav}>
 <i class="fa-solid fa-xmark"></i>
 </button>
</div>
</div>  

<div className="contactinfo">
<h2 className='fw-bold mt-5'>CONTACT INFO</h2>
 <div className="location d-flex">
 <i class="fa-solid fa-location-dot"></i>
 <p class="navtext">OPP KPBH METRO STATION,7ITECH SOLUTIONS</p>
 </div>
 <div className="phone d-flex">
 <i class="bi bi-phone"></i>

 <p class="navtext pt-1">7981027597</p>
 </div>

 <div className="mail d-flex">
 <i class="fa-solid fa-envelope"></i>
  <p class="navtext ">Sharathchand998@gmail.com</p>
 </div>
</div>        

</div>
     </div>
     
        </>
    )
}