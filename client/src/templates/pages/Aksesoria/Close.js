import React from 'react';
import './style/close.css';
import LoginIcon from '@mui/icons-material/Login';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Close = () => {
    return (
      <div class='cl-wrapper'>
        <div class='cl-navbar'>
          <ul class='cl-ul'>
            <li class='cl-h-li'><a class='cl-h-li'>SHOP</a></li>
            <li class='cl-h-li'><a class='cl-h-li'>ABOUT</a></li>
            <li class='cl-h-li'><a class='cl-h-li'>FAQ</a></li>
            <li class='cl-h-li'><a class='cl-h-li'>CONTACT</a></li>
          </ul>
          <p class='jud'><b>JUD.</b></p>
          <div class='cl-log-nav'>
            <div class='cl-login'>
              <LoginIcon />
              <p class='cl-log-in'>Log In</p>
            </div>
            <div class='cl-social'>
              <FacebookIcon  />
              <InstagramIcon />
              <PinterestIcon />
            </div>
            <div class='cl-bag'>
              <ShoppingBasketIcon />
            </div>
          </div>
        </div>
        <div class='cl-header-container'>
          <div class='cl-first-photo'>
            <div class='cl-anna-first-photo'>.</div>
          </div>
          <div class='cl-sec-photo'>
            <div class='cl-anna-sec-photo'>.</div>
          </div>
          <div class='cl-head-par'>
            <p class='cl-anna-jud'>
              ANNA STONE
              & 
              <b>JUD.</b>
            </p>
            <p class='cl-intro'>lntroducing the Capsule Collection</p>
            <button type='button' class='cl-shop-btn'>SHOP NOW</button>
          </div>
        </div>
        <p class='cl-explore-col'>Explore the Collection</p>
        <div class='cl-main-container'>
          <div class='cl-first-row'>
            <div class='cl-card'>
              <div class='cl-f-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$140</p>
            </div>
            <div class='cl-card'>
              <div class='cl-s-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$120</p>
            </div>
            <div class='cl-card'>
              <div class='cl-th-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$140</p>
            </div>
            <div class='cl-card'>
              <div class='cl-four-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$120</p>
            </div>
          </div>  
          <div class='cl-second-row'>
            <div class='cl-card'>
              <div class='cl-five-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$110</p>
            </div>
            <div class='cl-card'>
              <div class='cl-six-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$170</p>
            </div>
            <div class='cl-card'>
              <div class='cl-sev-img cl-img cl-sev-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$190</p>
            </div>
            <div class='cl-card'>
              <div class='cl-ei-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$170</p>
            </div>
          </div> 
          <div class='cl-third-row'>
            <div class='cl-card'>
              <div class='cl-ten-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$120</p>
            </div>
            <div class='cl-card'>
              <div class='cl-el-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$130</p>
            </div>
            <div class='cl-card'>
              <div class='cl-tw-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$160</p>
            </div>
            <div class='cl-card'>
              <div class='cl-thi-img cl-img'>Quick View</div>
              <p class='cl-product'>I`m a product</p>
              <p class='cl-price'>$150</p>
            </div>
          </div> 
        </div>
        <p class='cl-explore-col'>About the Collection</p>
        <p class='cl-paragraph'>
          l`m a paragraph. Click here to add your own text and edit me. It`s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
          I`m a great place for you to tell a story and let your users know a little more about you.
        </p> 
        <div class='aj'>
          <p class='a-j A'><b>A</b></p>
          <div class='aj-photo'> </div>
          <p class='a-j J'><b>J.</b></p>
        </div>
        <div class='cl-footer-container'>
          <p class='cl-never-miss'>Never miss our updates about new arrivals and special offers</p>
          <input type="text" name="input" value="Enter your email here*" class='cl-input' />
          <button type='button' class='cl-subscr-btn'>Subscribe Now</button>
        </div>
        <div class='cl-footer-nav'>
          <ul class='cl-f-ul'>
            <li class='cl-f-li'><a href='' class='cl-f-li'>SHOP</a></li>
            <li class='cl-f-li'><a href='' class='cl-f-li'>ABOUT</a></li>
            <li class='cl-f-li'><a href='' class='cl-f-li'>CONTACT</a></li>
            <li class='cl-f-li'><a href='' class='cl-f-li'>FAQ</a></li>
            <li class='cl-f-li'><a href='' class='cl-f-li'>SHIPPING & RETURN</a></li>
            <li class='cl-f-li'><a href='' class='cl-f-li'>STORE POLICY </a></li>
          </ul>
        </div>
      </div>
    );
};


export default Close;