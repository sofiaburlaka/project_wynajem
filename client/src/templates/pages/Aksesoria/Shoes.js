import React from 'react';
import './style/shoes.css';


const Shoes = () => {
    return (
    <div class='shoes'>
         <div class="shoes-container">
            <div class="shoes-nav">
                <nav class="sh-nav">   
                <ul class='sh-ul'>
                    <li ><a class='sh-a sh-home' href=''>Home</a></li>
                    <li class="dropdown">
                      <a href="javascript:void(0)" class="sh-a">Collection</a>
                    <div class="dropdown-content">
                        <a class='sh-a sh-dropdwn' href="#">Heals</a>
                        <a class='sh-a sh-dropdwn' href="#">Boots</a>
                        <a class='sh-a sh-dropdwn' href="#">Flats</a>
                    </div>
                    </li>
                    <li ><a class='sh-a' href=''>About Us</a></li>
                    <li ><a class='sh-a' href=''>Contact</a></li>
                    <li ><a class='sh-a' href=''>FAQ</a></li>
                </ul>                 
                </nav>
                <div class='sh-login-all'>
                    <div class='sh-login'>
                     <div class='sh-log-icon'></div>
                     <a class='sh-a sh-a-login'>Log In</a>
                    </div>
                </div>
            </div>
            <div class="sh-logotype">
                 <div class="sh-logo-img"></div>
                 <p class="shoe-fetish">SHOE FETISH</p>
            </div>
            <div class="sh-first-field">
                <div class='sh-first-field-img'>
                    <div class='fall-trend-block'>
                        <p class='sh-off-text'>20% Off</p>
                        <p class='sh-fall-text'>FALL</p>
                        <p class='sh-fall-text '>TRENDS</p>
                        <button type="button" class='sh-button sh-first-button'>Shop Collection</button>
                    </div>
                </div>
            </div>
            <div class="sh-second-field">
                <div class='sh-first-img-block'>
                    <p class='sh-text-purple-f '>Find Your</p>
                    <p class='sh-text-purple-s '>SOLE MATE</p>
                    <p class='sh-text-purple-th '>SHOP BOOTS{'>'}</p>
                </div>
                <div class='sh-second-img-block'>
                    <div class='sh-second-img-bloc sh-border'>
                        <p class='sh-text-yellow'> I am a paragraph. Click here to add your own text and edit me. It is easy.</p>
                        <form class='sh-form'>
                            <input type="email" placeholder='Enter your email here' class='sh-input'></input>
                            <button type="button" class='sh-button'>Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="sh-third-field">
                <div class='sh-thirdfield-text'>
                    <p class='pumpup-text'>PumpUp The Volume With Our</p>
                    <p class='new-col-text'>NEW COLLECTION{'>'}</p>
                </div>
                <div class='shoes-cards'>
                    <div class='sh-first-card'>
                        <div class='first-shoe'></div>
                        <div class='shoes-hover-text'>
                            <p class='shoes-card-text'>SUEDE PEEP</p>
                            <p class='shoes-card-text'>TOES</p>
                            <p class='sh-price'>$129.00</p>
                        </div>
                    </div>
                    <div class='sh-second-card'>
                        <div class='second-shoe'></div>
                        <div class='shoes-hover-text'>
                            <p class='shoes-card-text'>SLIVER STRAP</p>
                            <p class='shoes-card-text'>HEELS</p>
                            <p class='sh-price'>$149.00</p>
                        </div>
                    </div>
                    <div class='sh-third-card'>
                      <div class='third-shoe'></div>
                      <p class='shoes-card-text'>ANKLE STRAP</p>
                      <p class='shoes-card-text'>SANDALS</p>
                      <p class='sh-price'>$159.00</p>
                    </div>
                </div>
            </div>
           <div class='sh-footer'>
           </div>
         </div>
    </div>
    );
};
export default Shoes;