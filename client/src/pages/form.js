import React from 'react';
import '../style/form.css';

const Form = () => {
  return (
    <div class="form">
      <div class="container">
        <div class="title">Formularz zamówienia</div>
        <div class="content">
          <form action="https://formsubmit.co/9235a91399846640f736148a896c2a05" method="POST">
            <div class="user-details">
              <div class="input-box">
                <div class="details">Imię i nazwisko</div>
                <input type="text" name="Name" placeholder="Wpisz swoje imię" required />
              </div>
              <div class="input-box">
                <div class="details">Numer telefonu</div>
                <input type="text" name="Phone" placeholder="Wpisz swój telefon" required />
              </div>
              <div class="input-box">
                <div class="details">E-mail</div>
                <input type="text" name="Email" placeholder="Wpisz swój adress email" required />
              </div>
              <div class="input-box">
                <div class="details">Puste miejsce</div>
                <input type="text" placeholder="Enter your something" required />
              </div>
              <div class="input-box">
                <div class="details">ID produktu</div>
                <input type="text" name="Products" placeholder="Wpisz ID produktu" required />
              </div>
              <div class="input-box">
                <div class="details">Puste miejsce</div>
                <input type="text" placeholder="Enter your something" required />
              </div>
            </div>
            <div class="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <div class="gender-title">Polityka prywatności</div>
              <div style={{display: 'flex'}}>
                <div style={{paddingRight: 5}}>Czy zgadzasz się z </div>
                <a href='/privacy'>
                  polityką prywatności?
                </a>
              </div>
              <div class="category">
                <label for="dot-1">
                  <div class="dot one" />
                  <div class="gender">Tak</div>
                </label>
              </div>
            </div>
            <div class="reg-form_button">
              <input type="submit" value="Złożyć zamówienie" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
