import React, { useState, useEffect } from 'react';
import "./Home.css"
import logo from "./images/logo.jpg"
import menu from "./images/clipart3035828.png"
export const Home=()=>{
         

  
// menu oepn and close
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
        <div className="main">
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

          <div className="box1">

          <div className="content text-light">
            <div className="container">
            <h2 className="fw-bold">
              WE ARE CREATIVE INC.
            </h2>

            <p className="large">
              GREAT CREATIVE AGENCY
            </p>

            <p className='fs-3 text-light'>Lorem ipsum dolor sit amet ingth length profit.</p>

            <div className="box3 d-flex">
              <div className="discover text-center">
                <p>DISCOVER</p>
              </div>

              <div className="righticon">
              <i class="bi bi-chevron-right"></i>
              </div>
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