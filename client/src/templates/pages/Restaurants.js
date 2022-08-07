import React from 'react';
import DropMenu from '../../components/DropMenu';
import Types from '../../components/Types';

const Restaurants = () => {
  return (
    <div class="accessories">
      <div class="accessories_container">

        <div class="templates_intro">
          <div class="templates_intro-container">
            <div class="templates_intro-text">
              Restauracje
            </div>
          </div>
          <div class="templates_border" />
          <DropMenu />
          <div class="templates_border-buttons" />
        </div>

        <div class="template_main-body">
          <Types />
        </div>

        <div class="pattern accessories_pattern">
          <div class="pattern_container">
            {/* LINE 1  */}
            <div class="pattern_box">
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
            </div>
            <div class="pattern_text">
              <div class="templates_text-box">
                <div class="templates_text">In progress...</div>
                <div class="templates_number">№0000</div>
                <div class="templates_price">$0</div>
              </div>
              <div class="templates_text-box">
                <div class="templates_text">In progress...</div>
                <div class="templates_number">№0000</div>
                <div class="templates_price">$0</div>
              </div>
              <div class="templates_text-box">
                <div class="templates_text">In progress...</div>
                <div class="templates_number">№0000</div>
                <div class="templates_price">$0</div>
              </div>
            </div>
            {/* LINE 2  */}
            <div class="pattern_box">
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
            </div>
            <div class="pattern_text">
              <div class="templates_text-box">
                <div class="templates_text">In progress...</div>
                <div class="templates_number">№0000</div>
                <div class="templates_price">$0</div>
              </div>
              <div class="templates_text-box">
                <div class="templates_text">In progress...</div>
                <div class="templates_number">№0000</div>
                <div class="templates_price">$0</div>
              </div>
              <div class="templates_text-box">
                <div class="templates_text">In progress...</div>
                <div class="templates_number">№0000</div>
                <div class="templates_price">$0</div>
              </div>
            </div>
            {/* LINE 3  */}
            <div class="pattern_box">
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
            </div>
            <div class="pattern_text">
              <div class="templates_text-box">
                <div class="templates_text">In progress...</div>
                <div class="templates_number">№0000</div>
                <div class="templates_price">$0</div>
              </div>
              <div class="templates_text-box">
                <div class="templates_text">In progress...</div>
                <div class="templates_number">№0000</div>
                <div class="templates_price">$0</div>
              </div>
              <div class="templates_text-box">
                <div class="templates_text">In progress...</div>
                <div class="templates_number">№0000</div>
                <div class="templates_price">$0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
