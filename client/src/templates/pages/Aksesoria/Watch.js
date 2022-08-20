import React from 'react';
import './style/watch.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';



const Watch = () => {
    return (
      <div class='w-wrapper'>
        <p class='w-rochette'>ROCHETTE</p>
        <p class='w-exclusive'>EXCLUSIVE SWISS MADE WATCHES</p>
        <div class='w-nav'>
          <ul class='w-ul'>
            <li class='w-li'><a class='w-li' href=' '>HOME</a></li>
            <li class='w-li'><a class='w-li' href=' '>SHOP</a></li>
            <li class='w-li'><a class='w-li' href=' '>ABOUT</a></li>
            <li class='w-li'><a class='w-li' href=' '>FAQ</a></li>
            <li class='w-li'><a class='w-li' href=' '>CONTACT</a></li>
          </ul>
          <hr class='w-hr' /> 
          <div class='w-login-group'>
            <AccountCircleIcon class='w-log-icon' />
            <p class='w-login'>Log In</p>
          </div>
          <hr class='w-hr' /> 
          <ShoppingBagIcon class='w-icon' />
        </div>
        <div class='w-clock-an'> 
          <div class='w-time'> 
            <p class='w-timeless'>TIMELESS QUALITY</p>
            <p class='w-time-par'>I`m a paragraph. Click here to add your own text and edit me. I`m a great place for you to tell a story and let your users know a little more about you.</p>
            <button class='w-shop-btn' type='button'>SHOP NOW</button>
          </div>
        </div>
        <div class='w-clocks'> 
          <div class='w-clock-block'>
            <div class='w-f-clock'> </div>
            <div class='w-btn-par-block'>
              <p class='w-cl-b-par'>BLACK JET</p>
              <p class='w-cl-b-price'>$79.00</p>
              <button class='w-button' type='button'>
                <a href=' ' class='w-a'>View Details</a>
              </button>
            </div>
          </div>
          <div class='w-clock-block'>            
            <div class='w-s-clock'> </div>
            <div class='w-btn-par-block'>
              <p class='w-cl-b-par'>GENTS</p>
              <p class='w-cl-b-price'>$89.00</p>
              <button class='w-button' type='button'>
                <a href=' ' class='w-a'>View Details</a>
              </button>
            </div>
          </div>
          <div class='w-clock-block'>
            <div class='w-th-clock'> </div>
            <div class='w-btn-par-block'>
              <p class='w-cl-b-par'>XTIME SPORT</p>
              <p class='w-cl-b-price'>$79.00</p> 
              <button class='w-button' type='button'>
                <a href=' ' class='w-a'>View Details</a> 
              </button>
            </div>
          </div>
          <div class='w-clock-block'>
            <div class='w-fo-clock'> </div>
            <div class='w-btn-par-block'>
              <p class='w-cl-b-par'>APOLLO</p>
              <p class='w-cl-b-price'>$59.00</p> 
              <button class='w-button' type='button'>
                <a href=' ' class='w-a'>View Details</a> 
              </button>
            </div>
          </div>
        </div>
        <footer class='w-footer'>
          <p class='w-footer-par'>© 2023 All rights reserved </p>
          <div class='w-footer-icons'>
            <FacebookIcon class='w-log-icon' />
            <TwitterIcon class='w-log-icon' />
            <InstagramIcon class='w-log-icon' />
          </div>
        </footer>
      </div>
    );
};

export default Watch;
    
    
  