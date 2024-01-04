import "./Home.css"
import menu from "./images/menu-bar.png"
import footer1 from "./images/footer1.jpg";
import footer2 from "./images/footer2.jpg";

import logo from "./images/logo.jpg";

import p1 from "./images/blog-big-1.jpg"
import p2 from "./images/blog-big-2.jpg"
import p3 from "./images/blog-big-3.jpg"
import p4 from "./images/blog-big-4.jpg"
import p5 from "./images/blog-big-5.jpg"
import p6 from "./images/blog-1.jpg"
import p7 from "./images/blog-2.jpg"
import p8 from "./images/blog-3.jpg"
import p11 from "./images/blog-avata-3.jpg"
import p10 from "./images/blog-avata-2.jpg"
import p9 from "./images/blog-avata-1.jpg"
import { useState } from "react";
export const Project1=()=>{
    
    
    

    
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


<div className="project1box2">

</div>

<div className="project1box3">
  <div className="container">

  
<div className="row project1box3firstrow">


  <div className="col-7 fullcol">
      <div className="firstdiv">
       <div className="p1image">
         <img src={p1} alt="" />
       </div>
       <div className="dateandtext text-center d-flex">
        <div className="date">
          <h1>30<br/>DEC</h1>
        </div>
        <div className="text">
          <h2>dolor sit amet consectetur adipisicing elit. Veritatis natus </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est expedita placeat perspiciatis explicabo aliquid optio, aperiam ipsum cum sed recusandae voluptatibus ipsa animi ea nisi dicta possimus? Sit, adipisci!</p>
        </div>
       </div>

       <div className="divfooter d-flex pt-5">
       <div className="picandtext d-flex">
        <div className="pic1">
          <img src={p9} alt="" />
        </div>
        <div className="text1">
          <h2>HARLEY</h2>
        </div>
       </div>  

       <div className="readmore1 d-flex text-end">
        <p>READMORE </p>
        <i class="bi bi-chevron-right"></i>
       </div>
      </div> 
       
      </div>






      <div className="seconddiv mt-5">
      <div className="p1image">
         <img src={p2} alt="" />
       </div>
       <div className="dateandtext text-center d-flex">
        <div className="date">
          <h1>30<br/>DEC</h1>
        </div>
        <div className="text">
          <h2>dolor sit amet consectetur adipisicing elit. Veritatis natus </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est expedita placeat perspiciatis explicabo aliquid optio, aperiam ipsum cum sed recusandae voluptatibus ipsa animi ea nisi dicta possimus? Sit, adipisci!</p>
        </div>
       </div>

       <div className="divfooter d-flex pt-5">
       <div className="picandtext d-flex">
        <div className="pic1">
          <img src={p10} alt="" />
        </div>
        <div className="text1">
          <h2>MELISA</h2>
        </div>
       </div>  

       <div className="readmore1 d-flex text-end">
        <p>READMORE </p>
        <i class="bi bi-chevron-right"></i>
       </div>
      </div> 
      </div>


      <div className="thirddiv mt-5">
      <div className="p1image">
         <img src={p3} alt="" />
       </div>
       <div className="dateandtext text-center d-flex">
        <div className="date">
          <h1>30<br/>DEC</h1>
        </div>
        <div className="text">
          <h2>dolor sit amet consectetur adipisicing elit. Veritatis natus </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est expedita placeat perspiciatis explicabo aliquid optio, aperiam ipsum cum sed recusandae voluptatibus ipsa animi ea nisi dicta possimus? Sit, adipisci!</p>
        </div>
       </div>

       <div className="divfooter d-flex pt-5">
       <div className="picandtext d-flex">
        <div className="pic1">
          <img src={p11} alt="" />
        </div>
        <div className="text1">
          <h2>VICKY</h2>
        </div>
       </div>  

       <div className="readmore1 d-flex text-end">
        <p>READMORE </p>
        <i class="bi bi-chevron-right"></i>
       </div>
      </div> 
      </div>
  </div>
  <div className="col-5 searchbarcolumn">
          <div className="search">
            <h2>SEARCH</h2>
            <div className="inputandsearch d-flex">
              <div className="input text-center">
            <input type="text" class="in" placeholder="SEARCH PROJECTS"></input>
            </div>
            <div className="searchicon">
            <i class="bi bi-search"></i>
            </div>

            </div>
          </div>

          <div className="recent mt-5">
                 <h1>RECENT POSTS</h1>

                 <div className="recent1 mt-4 d-flex">
                  <div className="rimg1">
                   <img src={p6} alt="" height="80px" width="80px"/>
                  </div>
                  <div className="rtext1 fw-bold">
                    <p className="fw-bold">DONT UNDERESTIMATE THE SOFTWARE ADMINISTRATION UX</p>
                  </div>
                 </div>
                   

                   <div className="recent1 mt-4 d-flex">
                  <div className="rimg1">
                   <img src={p7} alt="" height="80px" width="80px"/>
                  </div>
                  <div className="rtext1 fw-bold">
                    <p className="fw-bold">DONT UNDERESTIMATE THE SOFTWARE ADMINISTRATION UX</p>
                  </div>
                 </div>
                   
                 <div className="recent1 mt-4 d-flex">
                  <div className="rimg1">
                   <img src={p8} alt="" height="80px" width="80px"/>
                  </div>
                  <div className="rtext1 fw-bold">
                    <p className="fw-bold">WEBDESIGN DONE EXECELLENTLY</p>
                  </div>
                 </div>



          </div>
  </div>

  <div className="fourthdiv mt-5">
  <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
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
      <p className="text-light fw-bold">CONTACT US <i class="bi bi-chevron-right text-light"></i></p>
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