import React from 'react'
import Header from './Header'
import Footer from "./../footer/footer";
import "./Home.css"
import AboutImg from "./../../imgs/About.jpg";
import menuBarger from "./../../imgs/ingredients.jpg";
import Data from '../../Data';
import Team from '../../Team';
import {Carousel}from "react-bootstrap";
import s1 from "./../../imgs/s1.jpg";
import s2 from "./../../imgs/s2.jpg";
import s3 from "./../../imgs/s3.jpg";
import s4 from "./../../imgs/s4.jpg";
import s5 from "./../../imgs/s5.jpg";
// import team1 from "./../../imgs/team1.jpg";
// import team2 from "./../../imgs/team2.jpg";
// import team3 from "./../../imgs/team3.jpg";
// import team4 from "./../../imgs/team4.jpg";
// import team5 from "./../../imgs/team5.jpg";
function Home() {
  return (
    <div>
   <Header/>

      {/*///////////////// section two  ////////////////*/}
   <section className="numbers">
    <div className="container">
     <div className="row">
       <div className="col-md-3">
         <h2>1278+</h2>
         <p>SAVINGS</p>
       </div>  
       <div className="col-md-3">
         <h2>5704+</h2>
         <p>PHOTOS</p>
       </div>  
       <div className="col-md-3">
         <h2>4857+</h2>
         <p>GLOES</p>
       </div>  
       <div className="col-md-3">
         <h2>7548+</h2>
         <p>ROCKERS</p>
       </div>  
     </div>
    </div>
   </section>

{/*/////////////// About Section //////////////////////*/}
   <section className="About">
<div className="container">
<div className="row">
  <div className="col-md-6">
      <img src={AboutImg} title="About" />
  </div>
  <div className="col-md-6">
    <h2>We Pride ourselves on making real food from the best ingredients.</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem officiis deleniti, quasi ducimus nobis illo? Sunt accusamus adipisci inventore.</p>
    <button>learn More</button>
  </div>
  
</div>
    </div>
   </section>

{/*/////////////// ingredients Section //////////////////////*/}
<section className="ingredients">
<div className="container">
<div className="row">

  <div className="col-md-6">
    <h2>We Pride ourselves on making real food from the best ingredients.</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem officiis deleniti, quasi ducimus nobis illo? Sunt accusamus adipisci inventore.</p>
  <ul>
    <li>consectetur adipisicing elit.</li>
    <li>consectetur adipisicing elit.</li>
    <li>consectetur adipisicing elit.</li>
    
  </ul>
  <button>
      Learn More
    </button>
  </div>
  
  <div className="col-md-6">
      <img src={menuBarger} title="ingredients" />
  </div>
</div>
    </div>
</section>

{/*/////////////// data Section //////////////////////*/}
<section className="data">
  <div className="container">
    <div className="row">
      <div className="col-lg-12" col-md-12>
        <h2>McDonald's burgers made from whole cuts of British beef or 100% chicken breast; sustainable fish or perfect veggie patties.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos consequatur quisquam veniam ipsum ex, neque vero maxime nisi repellat!</p>
        <a href="">Watch Our Story</a>
      </div>
    </div>
  </div>
</section>

{/*/////////////// Card Section //////////////////////*/}
<section className="blog">
  <div className="container">
    <div className="row rowone">
    <div className="col-lg-12" col-md-12>
      <h2>Explore Our Foods</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quisquam fuga voluptatem quae! Architecto, cumque repellendus eum accusamus ea voluptatibus beatae aliquid eligendi facilis asperiores? Quia deleniti modi, explicabo asperiores dolor dolorem dignissimos neque. Dolore molestiae iste magnam sit, vitae excepturi quasi impedit harum voluptate, fugiat illo unde autem atque, sapiente ex nostrum asperiores consequatur!</p>

        </div>
    </div>
    <div className="row">
    {
  Data.length >=1 ? (Data.map((item)=>{
    return(


      <div className="col-md-3">
      <div className="box">
        <img src={item.img}/>
        <h6>{item.title}</h6>
        <span>{item.time}</span>
        <h5>{item.price}</h5>
        <button>{item.button}</button>
      </div>
    </div>


    )
  })):<h2>There are not product in this time</h2>
}


    </div>
  </div>
</section>



{/*/////////////// slider Section //////////////////////*/}
<section className="slider">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
        <Carousel>
      <Carousel.Item>
        <img src={s1}  />
        <Carousel.Caption>
        <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <span>Third slide label</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={s2}  />


        <Carousel.Caption>
        <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <span>Third slide label</span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={s3}  />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <span>Third slide label</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={s4}  />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <span>Third slide label</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={s5}  />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <span>Third slide label</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    </div>

  </section>
{/*/////////////// team Section //////////////////////*/}
<section>
  <div className="container">
    <div className="row">
      <div className="col-lg-12" col-md-12>
      
      </div>
    </div>
  </div>
</section>

{/*/////////////// time Section //////////////////////*/}
<section className="team">
  <div className="container">
    <div className="row rowone">
    <div className="col-lg-12" col-md-12>
      <h2>Explore Our Team</h2>

        </div>
    </div>
    <div className="row">
    {
  Team.length >=1 ? (Team.map((item)=>{
    return(


      <div className="col-md-3">
      <div className="box">
        <img src={item.img}/>
        <h6>{item.name}</h6>
        <span>{item.jop}</span>
        <button>{item.button}</button>
      </div>
    </div>


    )
  })):<h2>There are not teams in this time</h2>
}


    </div>
  </div>
</section>


<Footer/>
    </div>
  )
}

export default Home
