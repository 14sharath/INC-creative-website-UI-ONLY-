import "./Home.css"

import menu from "./images/menu-bar.png"

import logo from "./images/logo.jpg";

import img1 from "./images/pt-2.3.jpg"
import img2 from "./images/pt-2.4.jpg"
import img3 from "./images/pt-2.5.jpg"
import img4 from "./images/pt-2.6.jpg"
import img5 from "./images/pt-2.7.jpg"
import img6 from "./images/pt-2.8.jpg"
import img7 from "./images/pt-2.9.jpg"
import footer1 from "./images/footer1.jpg";
import footer2 from "./images/footer2.jpg";
import { useState } from "react";

export const Project=()=>{
      
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




     <div className="projectbox2">
        <div className="container">
        <div className="row projectcontent text-dark">
           <div className="col  text-center">
            WEB DESIGNING IS MY PASSION
           </div>
        </div>
        </div>
     </div> 

       <div className="projectbox3">
        <div className="container">

        <div className="row talents mt-5">

  <div className="col talent1">
    <h5 className="fw-bold">WEB DESIGN</h5>
  </div>

  <div className="col talent1">
    <h5 className="fw-bold">MOBILE APPLICATION DEVELOPMENT</h5>
  </div>

  <div className="col talent1">
    <h5 className="fw-bold">BUSINESS</h5>
  </div>

  <div className="col talent1">
    <h5 className="fw-bold">DEVELOPMENT</h5>
  </div>

 

</div>
        





        <div className="row projectimages mt-5">
            <div className="col oimg8">
                 <img src={img1} alt=""/>
                 <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
            </div>

            <div className="col oimg8">
            <img src={img2} alt=""/>
              <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
                      <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
            </div>

            <div className="col oimg8">
            <img src={img3} alt=""/>
            <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
            </div>
        </div>
        <div className="row mt-5 projectimages">
           <div className="col oimg8">
           <img src={img4} alt=""/>
           <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
           </div>

           <div className="col oimg8">
           <img src={img5} alt=""/>
           <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
           </div>

           <div className="col oimg8">
           <img src={img6} alt=""/>
           <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
           </div>

        </div>


        <div className="row mt-5 projectimages">

            <div className="col oimg8">
            <img src={img7} alt=""/>
            <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
            </div>

            <div className="col oimg8">
            <img src={img1} alt=""/>
            <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
             </div>

            <div className="col oimg8">
            <img src={img2} alt=""/>
            <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>
            </div>
        </div>

       


       </div>
       <div className="row bg-primary climax2 mt-5">

<div className="col-6 text-center">
 <h1 className="fw-bold">LETS START A PROJECT</h1>

 <p className="fs-3">It Will Be Fun. Lets Experience It</p>
</div>

<div className="col-6 text-center">
    <div className="contactus">
      <p className="fw-bold">CONTACT US <i class="bi bi-chevron-right "></i></p>
    </div>

</div>
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

    <div className="col qk">
     <h2 className="quicklink">QUICK LINKS</h2>

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