import React from 'react';
import './style/jewelries.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Jewelries = () => {
    return (
      <div class='jew-wrapper'> 
        <div class='jew-nav'>
          <div class='jew-navigation'>
            <div class='jew-logo'> </div>
            <p class='jew-bijou'>Bijou</p>
            <div class='jew-links'>
              <ul class='jew-ul'>
                <li class='jew-li'><a class='jew-li' href=' '>Home</a></li>
                <li class='jew-li'><a class='jew-li' href=' '>Collections</a></li>
                <li class='jew-li'><a class='jew-li' href=' '>Locations</a></li>
                <li class='jew-li'><a class='jew-li' href=' '>About</a></li>
                <li class='jew-li'><a class='jew-li' href=' '>Contact</a></li>
              </ul>
            </div>
            <div class='jew-login-block'>
              <AccountCircleIcon sx={{ color: 'gray' }}><a class='jew-li' href=' '> </a></AccountCircleIcon>
              <p class='jew-login'>Log In</p>
              <ShoppingBagIcon sx={{ color: 'gray' }}><a class='jew-li' href=' '> </a></ShoppingBagIcon>
            </div>
          </div>
        </div>
        <div class='jew-first-block'>
          <div class='jew-main'>
            <p class='jew-the-mew'>The New Minimal</p>
            <p class='jew-gold'>GOLD COLLECTION</p>
            <button class='jew-main-btn' type='button'>Shop Collection</button>
          </div>
        </div>
        <div class='jew-second-block'>
          <div class='jew-blocks'>
            <div class='jew-block-j'>
              <div class='jew-f-bl jew-small'>
                <div> </div>
                <button class='jew-button' type='button'>
                  <a href=' ' class='jew-a'>Quick View</a>
                </button>
              </div>
              <p class='jew-product'> I`m a product </p>
              <p class='jew-price'>$19.99</p>
            </div>
            <div class='jew-block-j'>
              <div class='jew-s-bl jew-small'>
                <div class='jew-on-sale'>On Sale</div>
                <button class='jew-button' type='button'>
                  <a href=' ' class='jew-a'>Quick View</a>
                </button>
              </div>
              <p class='jew-product'> I`m a product </p>
              <p class='jew-price'>
                <s>$19.99</s>
                $14.99
              </p>
             
            </div>
            <div class='jew-block-j'>
              <div class='jew-th-bl jew-small'>
                <div> </div>
                <button class='jew-button' type='button'>
                  <a href=' ' class='jew-a'>Quick View</a>
                </button>
              </div>
              <p class='jew-product'> I`m a product </p>
              <p class='jew-price'>$19.99</p>
            </div>
            <div class='jew-block-j'>
              <div class='jew-fo-bl jew-small'>
                <div> </div>
                <button class='jew-button' type='button'>
                  <a href=' ' class='jew-a'>Quick View</a>
                </button>
              </div>
              <p class='jew-product'> I`m a product </p>
              <p class='jew-price'>$19.99</p>
            </div>
          </div>
        </div>
        <div class='jew-footer'>
          <div class='jew-icons'>
            <FacebookIcon class='jew-icon' />
            <TwitterIcon class='jew-icon' />
            <InstagramIcon class='jew-icon' />
          </div>
          <p class='jew-f-par'>info@mysite.com</p>
          <p class='jew-s-par'>© 2023 by Bijou. Proudly created with Adima.com</p>
        </div>
      </div>
    );
};

export default Jewelries;