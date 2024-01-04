import "./Home.css";
import CountUp from "react-countup";
import menu from "./images/menu-bar.png"

import logo from "./images/logo.jpg";
import img1 from "./images/about-1.jpg"
import brand1 from "./images/brand-1.png"
import brand2 from "./images/brand-2.png"
import brand3 from "./images/brand-3.png"
import brand4 from "./images/brand-4.png"
import brand5 from "./images/brand-5.png"
import brand6 from "./images/brand-6.png"
import brand7 from "./images/brand-7.png"
import brand8 from "./images/brand-8.png"
import brand9 from "./images/brand-9.png"
import brand10 from "./images/brand-10.png"
import brand11 from "./images/brand-11.png"
import brand12 from "./images/brand-12.png"
import footer1 from "./images/footer1.jpg";
import footer2 from "./images/footer2.jpg";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";


export const About=()=>{
    
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
     <div className="aboutbox2">
        <div className="container">
        <div className="row aboutcontent text-dark">
            <div className="col-6">
                <h1>ABOUT US</h1>
            </div>
            <div className="col-6 text-end">
              <a href="" className="text-dark text-decoration-none fs-3 fw-bold">HOME/</a><a href="" className="text-decoration-none fw-bold text-dark fs-3">ABOUT</a>
            </div>
        </div>
        </div>
     </div> 



     <div className="aboutbox3">
            <div className="container">
            <div className="row">

                <div className="col-6">
                      <img src={img1} alt=""/>
                </div>

                <div className="col-6">

                <p className='text-primary fs-3'>CREATIVE IN MIND</p>

<h1>OUR CREATIVITY HAS NO LIMIT</h1>

<p className='content2finaltext1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, voluptates iste ut, debitis vitae at itaque tempore harum unde quibusdam voluptatum inventore est assumenda! Delectus rem illo dolores aliquam a?</p>

<div className="aboutbox5 d-flex">
<div className="aboutreadmore">
  <p>READ MORE</p>
</div>

<div className="icon2">
<i class="bi bi-chevron-right"></i>
</div>
</div>
                </div>
            </div>

            <ScrollTrigger onEnter={
              ()=> setcounterStarted(true)  
                                   } 
            onExit={()=>
            setcounterStarted(false)
                  }
            >
            <div className="row numandt mt-5">
           
              <div className="col iconandtext d-flex">

               <i class="bi bi-gear"></i>

                <div className="numberandtext">
                  <p >
                    { counterStarted &&
                  <CountUp  
                   start={0}
                   end={39}
                   duration={2.5}>
                   </CountUp>
                    }
                  </p>
                  <p>PLUGINS</p>
                </div>
              </div>

              <div className="col iconandtext d-flex">
                      

              <i class="bi bi-person-fill"></i>

<div className="numberandtext">
  <p >  { counterStarted &&
                  <CountUp  
                   start={0}
                   end={100}
                   duration={1.5}>
                   </CountUp>
                    }</p>
  <p>CLIENTS</p>
</div>
              </div>

              <div className="col iconandtext d-flex">
              <i class="bi bi-app"></i>

<div className="numberandtext">
  <p >  { counterStarted &&
                  <CountUp  
                   start={20}
                   end={50}
                   duration={1.5}>
                   </CountUp>
                    }</p>
  <p>APPS</p>
</div>
              </div>

              <div className="col iconandtext d-flex">
              <i class="bi bi-laptop"></i>

<div className="numberandtext">
  <p >  { counterStarted &&
                  <CountUp  
                   start={30}
                   end={75}
                   duration={1.5}>
                   </CountUp>
                    }</p>
  <p>PROJECTS</p>
</div>
              </div>
              
            </div>
            </ScrollTrigger>








{/* slider */}


         





        </div>
        <div className="box6 mt-5">
            <div className="container">
            <div className="row gx-5 pt-5">
            <div className="col-8">
            <p className="fs-3 text-primary">WHY CHOOSE US</p>
            <h1>BECAUSE WE ARE THE BEST</h1>
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore minima beatae recusandae voluptatum non illum facere impedit dolorum, mollitia</p>

            <div className="firstrow d-flex mt-5">
                <div className="col1 d-flex">
                  <div className="boxes">
                  <i class="bi bi-book"></i>
                  </div>
                  <div className="text">
                    <h3>FULL RESPONSIVE</h3>
                    <p>Lorem ipsum dolor sit amet consecteturnam laudantium reprehend</p>
                  </div>
                </div>

                <div className="col2 d-flex">
                  
                <div className="boxes">
                <i class="bi bi-music-note-beamed"></i>
                  </div>
                  <div className="text">
                    <h3>FULL RESPONSIVE</h3>
                    <p>Lorem ipsum dolor sit amet consecteturnam laudantium reprehend</p>
                  </div>
                </div>
                </div>

                <div className="secondrow d-flex mt-5">
                    <div className="col11 d-flex">
                    <div className="boxes">
                    <i class="bi bi-cart"></i>
                  </div>
                  <div className="text">
                    <h3>FULL RESPONSIVE</h3>
                    <p>Lorem ipsum dolor sit amet consecteturnam laudantium reprehend</p>
                  </div>
                    </div>

                    <div className="col22 d-flex">
                    <div className="boxes">
                    <i class="bi bi-lock-fill"></i>
                  </div>
                  <div className="text">
                    <h3>FULL RESPONSIVE</h3>
                    <p>Lorem ipsum dolor sit amet consecteturnam laudantium reprehend</p>
                  </div>
                    </div>  
                  
                </div>  
            
            </div>

            <div className="col-4 typical">
                
                <div className="imageongraycolor">

                </div>
                <div className="greycolor">

                </div>

            </div>
          </div>
          </div>

         </div>

         <div className="container mt-5">
          <div className="row table1">
            <div className="col">
               <img src={brand1} alt="" />
            </div>

            <div className="col">
            <img src={brand3} alt="" />
            </div>

            <div className="col">
            <img src={brand3} alt="" />
            </div>

            <div className="col">
            <img src={brand4} alt="" />
            </div>

            <div className="col">
            <img src={brand5} alt="" />
            </div>

            <div className="col">
            <img src={brand6} alt="" />
            </div>

          </div>

          <div className="row table2">
          <div className="col">
          <img src={brand7} alt="" />
           </div>

           <div className="col">
           <img src={brand8} alt="" />
            </div>

            <div className="col">
            <img src={brand9} alt="" />
            </div>

            <div className="col">
            <img src={brand10} alt="" />
            </div>

            <div className="col">
            <img src={brand11} alt="" />
            </div>

            <div className="col">
            <img src={brand12} alt="" />
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

    <div className="col text-center qk">
     <h2 className="quicklink">QUICK LINKS</h2>

     <div className="quicklinks d-flex text-capitalize">
      <div className="one text-center">
         <p>about us</p>
        <p>customer care</p>
        <p>team members</p>
        <p>advertisements</p>
        <p>affiliation</p>
      </div>
      <div className="two text-center">
        <p>service</p>
        <p>pricing plans</p>
        <p>career</p>
        <p>return policy</p>       
        <p>affiliation</p>
        <p>terms of use</p>     
     </div>
     </div>
    </div>

    <div className="col recentposts">
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