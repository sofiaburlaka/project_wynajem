import React from 'react';
import '../style/GlassEffect.css';

const GlassEffect = () => {
  return (
    <figure class="card">
      <figcaption style={{display: 'flex'}}>
        <div class="card_text">Otworzyć</div>
        <arrow />
        <arrow />
      </figcaption>
    </figure>
  );
};

export default GlassEffect;
