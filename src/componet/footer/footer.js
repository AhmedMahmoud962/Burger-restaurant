import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <div>
        <footer className="footer">
        <div className="containerr">
            <div className="roww">
                <div className="footer-col">
                    <h2>Company</h2>
                  
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Explore food</a></li>
                        <li><a href="">Review</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>


                <div className="footer-col">
                    <h2>get help</h2>
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">SHIPPING</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Order status</a></li>
                        <li><a href="">payment option</a></li>
                      
                   
                    </ul>
                </div>



                <div className="footer-col">
                    <h2>online Food</h2>
                    <ul>
                    <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Explore food</a></li>
                        <li><a href="">Review</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>


                <div className="footer-col">
                    <h2>follow us </h2>
         {/* <div className="social-links">
                <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-twitter"></i></a>
              <a href=""><i className="bi bi-github"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
         </div> */}
           <ul>
    <li><a href="">Facebook</a></li>
    <li><a href="">Twitter</a></li>
    <li><a href="">LinkedIn</a></li>
    <li><a href="">Instagram</a></li>
    <li><a href="">Github</a></li>
                    </ul>
                </div>
            </div>
           
        </div>
      
    </footer>
    </div>
  );
}

export default Footer;
