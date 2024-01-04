import { useState } from "react";
import { useEffect } from "react";
import { Home } from "./Home";
import "./Home.css";
import live1 from "./images/live1.jpg";
import live2 from "./images/live2.jpg";
import live3 from "./images/live3.jpg";
import mainimg1 from "./images/mainimage.jpg";
import mainimg2 from "./images/mainimage2.jpg";
import mainimg3 from "./images/mainimage3.jpg";
import mainimg4 from "./images/mainimage4.jpg";
import mainimg5 from "./images/mainimage5.jpg";
import mainimg6 from "./images/mainimage6.jpg";
import mainimg7 from "./images/mainimage7.jpg";
import mainimg8 from "./images/mainimage8.jpg";
import mainimg9 from  "./images/imagee10.jpg";
import mainimg10 from "./images/image11.jpg";
import { Autoslider } from "./Autoslider";
import logo from "./images/logo (2).png";
import footer1 from "./images/footer1.jpg";
import footer2 from "./images/footer2.jpg";

export const Home2=()=>{

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on component mount
  }, []);


  
   const[animatef5,setAnimatef5]=useState(false)
   useEffect(()=>{
    setAnimatef5(true)
   },[])

    return(

        <>
        <Home/>

        <div className="box4 mt-5">
          <div className="container">
          <div className="row gx-5 ">
            <div className="col-6">
              <div className="images d-flex">
              <div className="image1">
               <img src={live1} alt=""/>
              </div>
              <div className="img2and3">
                <div className="img2">
                  <img src={live2} alt=""/>
                </div> 

                <div className="img3">
                  <img src={live3} alt=""/>
                </div>
              </div>
            </div>

            
            </div>

            <div className="col-6 ">
            <div className="content2">
              <p className='text-primary fs-3'>CREATIVE IN MIND</p>

              <h1>OUR CREATIVITY HAS NO LIMIT</h1>

              <p className='content2finaltext1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, voluptates iste ut, debitis vitae at itaque tempore harum unde quibusdam voluptatum inventore est assumenda! Delectus rem illo dolores aliquam a?</p>

              <div className="homebox5 d-flex">
              <div className="homereadmore">
                <p>READ MORE</p>
              </div>

              <div className="icon2">
              <i class="bi bi-chevron-right"></i>
              </div>
            </div>
            </div>

            </div>
          </div>
          </div>

          <div className="box6 mt-5">
            <div className="container">
            <div className="row gx-5 pt-5">
            <div className="col-8">
            <p className="fs-3 text-primary">WHY CHOOSE US</p>
            <h1>BECAUSE WE ARE THE BEST</h1>
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore minima beatae recusandae voluptatum non illum facere impedit dolorum, mollitia</p>

            <div className="firstrow mt-5 d-flex">
                <div className="col1 d-flex">
                  <div className="boxes">
                  <i class="bi bi-book"></i>
                  </div>
                  <div className="hometext">
                    <h3>FULL RESPONSIVE</h3>
                    <p>Lorem ipsum dolor sit amet consecteturnam laudantium reprehend</p>
                  </div>
                </div>

                <div className="col2 d-flex">
                  
                <div className="boxes">
                <i class="bi bi-music-note-beamed"></i>
                  </div>
                  <div className="hometext">
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
                  <div className="hometext">
                    <h3>FULL RESPONSIVE</h3>
                    <p>Lorem ipsum dolor sit amet consecteturnam laudantium reprehend</p>
                  </div>
                    </div>

                    <div className="col22 d-flex">
                    <div className="boxes">
                    <i class="bi bi-lock-fill"></i>
                  </div>
                  <div className="hometext">
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


         <div className="box7 mt-5">
         <div className="container">
          <div className="row">
            <div className="col-12">
            <p className={`portfolio fw-bold text-primary fs-3 text-center ${animate ? 'animate' : ''}`}>PORTFOLIO</p>

            <h2 className="text-dark text-center fw-bold">OUR FEATURED PRODUCTS</h2>
           
         </div>
         </div>
         </div>
         <div className="containerclimax mt-5">
            <div className="row featuredproducts">
              <div className="col"> 
                <h5 className="homef1">ALL</h5>
              </div>

              <div className="col ">
                <h5 className="homef2">WEBDESIGN</h5>
              </div>

              <div className="col">
                <h5 className=" homef3">DEVELOPMENT</h5>
              </div>

              <div className="col ">
                <h5 className="homef4">WORDPRESS</h5>
              </div>

              <div className="col">
                <h5 className={`homef5 ${animatef5? "f5":""}`}>PRINT</h5>
              </div>

            </div>
            </div>
             <div className="container3 mt-5">
          
              
              <div className="row maintask">
                     
                    <div className="col oimg1">
                    <img src={mainimg1} className="mainimg1" alt=""/>  
                      <div className="overlay1">
                      <i class="bi bi-link-45deg"></i>
                      </div>
                    </div>

                    <div className="col iimg2">
                    <img src={mainimg2} className="mainimg2" alt=""/>  
                      <div className="overlay2">
                      <i class="bi bi-link-45deg"></i>
                      </div>
                      
                    </div> 

              </div>

              <div className="row maintask2 mt-5">
                <div className="col oimg3">
                <img src={mainimg3} className="mainimg3" alt=""/>  
                      <div className="overlay3">
                      <i class="bi bi-link-45deg"></i>
                      </div>
                </div>

               <div className="col oimg4">
               <img src={mainimg4} className="mainimg4" alt=""/>  
                      <div className="overlay4">
                      <i class="bi bi-link-45deg"></i>
                      </div>

               </div>

               <div className="col oimg5">

               <img src={mainimg5} className="mainimg5" alt=""/>  
                      <div className="overlay5">
                      <i class="bi bi-link-45deg"></i>
                      </div>

               </div>
              </div>

              <div className="row maintask3 mt-5">
                <div className="col oimg6">
                <img src={mainimg6} className="mainimg6" alt=""/>  
                      <div className="overlay6">
                      <i class="bi bi-link-45deg"></i>
                      </div>
                </div>

               <div className="col oimg7">
               <img src={mainimg7} className="mainimg7" alt=""/>  
                      <div className="overlay7">
                      <i class="bi bi-link-45deg"></i>
                      </div>

               </div>

               <div className="col oimg8">

               <img src={mainimg8} className="mainimg8" alt=""/>  
                      <div className="overlay8">
                      <i class="bi bi-link-45deg"></i>
                      </div>

               </div>
              </div>

            </div>


            <div className="row bg-primary climax2">

              <div className="col-6 text-center">
               <h1 className="fw-bold">LETS START A PROJECT</h1>

               <p className="fs-3">It Will Be Fun. Lets Experience It</p>
              </div>

              <div className="col-6 text-center">
                  <div className="contactus">
                    <p className="fw-bold">CONTACT US <i class="bi bi-chevron-right"></i></p>
                  </div>

              </div>
            </div>

               
{/* autoslider */}

<div className="container mt-5">
<Autoslider/>
</div>


               <div className="container mt-5">
                 <div className="row preclimax">
                  <div className="col">
                    <div className="box10">
                   <div className="date1">
                    <h1 className="text-light">24</h1>
                    <h3 className="text-light fw-bold">JUNE</h3>
                   </div>

                   <div>
                   <p className="hason text-dark fw-bold fs-s pt-3">HASON RAJAY KOY AMI KEHO NOIRE AMI KEHO NOI</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio laborum voluptate ratione vel! Aliquid, id nisi. Atque magnam eius laborum quisquam alias numquam. Distinctio possimus eos tempore asperiores dolore!</p>
                  <div className="text-primary pt-3">
                   <h3>READ MORE <i class="bi bi-chevron-right text-primary"></i></h3>
                  </div>
                  </div>
                  </div>
                  </div>


                  <div className="col">
                    <div className="box10">
                  <div className="date2">
                    <h1 className="text-light">24</h1>
                    <h3 className="text-light fw-bold">JUNE</h3>
                   </div>
                   <div>
                   <p className="hason text-dark fw-bold fs-s pt-3">HASON RAJAY KOY AMI KEHO NOIRE AMI KEHO NOI</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio laborum voluptate ratione vel! Aliquid, id nisi. Atque magnam eius laborum quisquam alias numquam. Distinctio possimus eos tempore asperiores dolore!</p>
                  <div className="text-primary pt-3">
                   <h3>READ MORE <i class="bi bi-chevron-right text-primary"></i></h3>
                  </div>
                  </div>
                  </div>
                  </div>

                  
                 </div>

                 <div className="row preclimax2">
                 <div className="col">
                    <div className="box10">
                   <div className="date1">
                    <h1 className="text-light">24</h1>
                    <h3 className="text-light fw-bold">JUNE</h3>
                   </div>

                   <div>
                   <p className="hason text-dark fw-bold fs-s pt-3">HASON RAJAY KOY AMI KEHO NOIRE AMI KEHO NOI</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio laborum voluptate ratione vel! Aliquid, id nisi. Atque magnam eius laborum quisquam alias numquam. Distinctio possimus eos tempore asperiores dolore!</p>
                  <div className="text-primary pt-3">
                   <h3>READ MORE <i class="bi bi-chevron-right text-primary"></i></h3>
                  </div>
                  </div>
                  </div>
                  </div>



                  <div className="col">
                    <div className="box10">
                   <div className="date1">
                    <h1 className="text-light">24</h1>
                    <h3 className="text-light fw-bold">JUNE</h3>
                   </div>

                   <div>
                   <p className="hason text-dark fw-bold fs-s pt-3">HASON RAJAY KOY AMI KEHO NOIRE AMI KEHO NOI</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio laborum voluptate ratione vel! Aliquid, id nisi. Atque magnam eius laborum quisquam alias numquam. Distinctio possimus eos tempore asperiores dolore!</p>
                  <div className="text-primary pt-3">
                   <h3>READ MORE <i class="bi bi-chevron-right text-primary"></i></h3>
                  </div>
                  </div>
                  </div>
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

                  <div className="col text-end">
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
            
           



</div>



































         </div>

        </>
    )
}