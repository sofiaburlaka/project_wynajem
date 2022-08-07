import React from 'react';
import '../style/types.css';

const Types = () => {
  return (
    <div class="types">
      <div class="types_container">
        <div class="types_text">
          Główne kategorie szablonów
        </div>
        <div class="types_buttons-container">
          <a href='/templates' class="types_button-main">Glowna</a>
          <div class="types_button-border" />
          <div class="types_button-down-container">
            <a href='/templates/fashion' class="types_button">Moda i odzież</a>
            <a href='/templates/decor' class="types_button">Dom i wystrój</a>
            <a href='/templates/electronics' class="types_button">Sklep z elektroniką</a>
            <a href='/templates/sites' class="types_button">Sklepy online</a>
            <a href='/templates/accessories' class="types_button">Akcesoria</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
