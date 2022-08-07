import React from 'react';
import '../style/footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer_container">
        <div class="footer_list">
          <div class="footer_item">
            <p class="footer_title">PRODUCT</p>
            <div class="footer_item-divst">
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Gallery</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Functions</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Web Accessibidivty</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Velo</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">My sites</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Premium plans</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Adima SEO</a>
              </div>
            </div>
          </div>
          <div class="footer_item">
            <p class="footer_title">COMPANY</p>
            <div class="footer_item-divst">
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">About Adima</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Investors</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Work at Adima</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Corporate identityv</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Terms of use</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">App Market Terms</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Privacy podivcy</a>
              </div>
            </div>
          </div>
          <div class="footer_item">
            <p class="footer_title">COMMUNITY</p>
            <div class="footer_item-divst">
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Adima Blog</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Adima Marketplace</a>
              </div>
            </div>
          </div>
          <div class="footer_item">
            <p class="footer_title">SUPPORT</p>
            <div class="footer_item-divst">
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Help Center</a>
              </div>
              <div class="footer_column">
                <a href='/' class="footer_column-text-disable">Status page</a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_discription-container">
          <div class="footer_logo" />
          <p class="footer_text">
            Adima is a leading cloud-based development platform with millions of
            users worldwide. We help create great professional sites.
          </p>
          <p class="footer_text">
            Promote your business, demonstrate skills, set up an online store or
            generate new ideas. Wix Website Designer has everything you need to
            create individual, professional and free websites.
          </p>
          <p class="footer_text">© 2006-2022 Adima, Inc</p>
          <div class="footer_icons">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <LinkedInIcon />
            <PinterestIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
