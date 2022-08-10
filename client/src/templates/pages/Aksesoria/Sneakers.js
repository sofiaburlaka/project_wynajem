import React from 'react';
import './style/sneakers.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {RiAccountCircleLine } from 'react-icons/ri';
import {GiShoppingBag} from 'react-icons/gi';

const Sneakers = () => {
    return (
      <div class='sn-body'>
        <div class='sn-navbar'>
          <div class='sn-nav-logo'>
            <p class='sn-nav-as'>as </p>
            <p class='sn-nav-as sn-nav-aw'>awesome sneakers</p>
          </div>
          <div class='sn-nav'>
            <ul class='sn-ul'>
              <li class='sn-li'><a href='' class='sn-a'>Home</a></li>
              <li class='sn-li'><a href='' class='sn-a'>Shop</a></li>
              <li class='sn-li'><a href='' class='sn-a'>About AS</a></li>
              <li class='sn-li'><a href='' class='sn-a'>Customer Service</a></li>
            </ul>
            <div class='sn-login-block'>
              <RiAccountCircleLine class='sn-login-icon' />
              <p class='sn-login-par'>Log In</p>
              <GiShoppingBag class='sn-login-icon' />
            </div>
          </div>
        </div>
        <div class='sn-first-container'>
          <div class='sn-logo-button'>
            <p class='sn-as'>as </p>
            <p class='sn-awesome'>AWESOME SNEAKERS</p>
            <button class='shop-now-btn' type='button'>SHOP NOW</button>
          </div>
        </div>
        <div class='sn-second-container'>
          <div class='sn-collections-block'>
            <div class='sn-men-collection'>
              <div class='sn-dark'>
                <p class='sn-mans-col'>MEN COLLECTION</p>
              </div>
            </div>
            <div class='sn-women-collection'>
              <div class='sn-dark'>
                <p class='sn-mans-col'>WOMEN COLLECTION</p>
              </div>
            </div>
          </div>
          <div class='sn-finalsale-block'>
            <div class='third-slide-sn'>
              <div class='sn-final-sale-card'>
                <p class='sn-final-sale'><b>FINAL SALE 40%-60%</b></p>
                <button class='shop-sale-btn' type='button'>SHOP SALE</button>
              </div>
            </div>
          </div>
          <div class='sn-examples-block'>
            <div class='sn-first-block'>
              <div class='snikers-card sn-card-f'><a href=''></a></div>
              <div class='snikers-card sn-card-s'><a href=''></a></div>
              <div class='snikers-card sn-card-th'><a href=''></a></div>
            </div>
            <div class='sn-second-block'>
              <div class='snikers-card sn-card-fo'><a href=''></a></div>
              <div class='snikers-card sn-card-fi'><a href=''></a></div>
              <div class='snikers-card sn-card-six'><a href=''></a></div>
            </div>
          </div>
          <footer class='sn-footer'>
            <p class='sn-as'>as</p>
            <div class='sn-footer-forms'>
              <div class='sn-address'>
                <p class='sn-par-address'>ADDRESS</p>
                <p class='sn-smth-address'>there is your address</p>
                <p class='sn-smth-address'>there is your address</p>
                <FaInstagram class='sn-icons' />
                <FaFacebookF class='sn-icons' />
                <BsTwitter class='sn-icons' />
              </div>
              <div class='sn-contact-us'>
                <p class='sn-par-address'>CONTACT US</p>
                <div class='sn-inputs'>
                  <div class='sn-three-inputs'>
                    <input type="text" id="fname" name="fname" value="Name" class='sn-input-style' />
                    <input type="email" id="lname" name="lname" value="Email" class='sn-input-style' />
                    <input type="text" id="lname" name="lname" value="Phone" class='sn-input-style' />
                  </div>
                  <input type="text" id="lname" name="lname" value="Type your message here..." class='sn-input-style' />
                </div>
                <input type="submit" value="Submit" class='sn-submit-inp' />
                
              </div>
              <div class='sn-stay-in-touch'>
                <p class='sn-par-address'>STAY IN TOUCH</p>
                <p class='sn-smth-address'>Join our mailing list</p>
                <input type="email" id="lname" name="lname" value="Enter your email here*" class='sn-input-style sn-stay-input' />
                <input type="submit" value="Subscribe Now" class='sn-submit-inp sn-submit-subscr' />
              </div>
            </div>
          </footer>
        </div>
      </div>

    );
};

export default Sneakers;