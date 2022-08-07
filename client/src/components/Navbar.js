/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../style/navbar.css';
import { Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navbar_main-container">
        <div class="navbar_container">
          {/* <---left_container--> */}
          <div class="left_container">
            <a href="/main" class="logo_container" />
            <div class="navigarion_container">
              <a href="/main" class="menu_text">Główna</a>
              <div class="menu_text-disabled">Functions</div>
              <div class="menu_text-disabled">Gallary</div>
              <a href="/subscriptions" class="menu_text">
                Oferta
              </a>
              <a href="/templates" class="menu_text">
                Marketplace
              </a>
              <a href="/support" class="menu_text">Support</a>
            </div>
          </div>
          {/* <---rigth_container--> */}
          <div class="rigth_container">
            <div class="icon_container">
              <LanguageIcon style={{ color: 'grey' }} />
            </div>
            <div class="navbar_button">
              <Button
                style={{ marginBottom: 20, borderRadius: 50 }}
                variant="contained"
              >
                <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  href="/form"
                >
                  Zamów
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div class="main_border-container" />
      </div>
    </div>
  );
};

export default Navbar;
