import React from 'react';
import '../style/main.css';
import { Button } from '@mui/material';

const Main = () => {
  return (
    <div class="main">
      <div class="main_container">
        {/* <---HELP---> */}
        <div class="main_information-container">
          <div class="main_text-container">
            Lorem Ipsum has been the industrys standard dummy
          </div>
          <div class="main_help-container">
            <a href="/guide" class="main_text-help-container">
              Lorem Ipsum
            </a>
          </div>
        </div>
        {/* <---BLOG---> */}
        <div class="blog_contaniner">
          <div class="blog_text-main-contanier barsik">Create your</div>
          <div class="blog_text-main-contanier">professional website </div>
          <br />
          <div class="blog_text-contanier">
            Discover a platform that will give you complete freedom to create,
            design,
            {' '}
          </div>
          <div class="blog_text-contanier">
            manage and develop the site of your dreams.
          </div>
          <br />
          <a href="/auth" class="blog_button">
            <Button style={{ borderRadius: 50 }} variant="contained">
              Get started
            </Button>
          </a>
          <div class="blog_container">
            <div class="blog_left-img" />
            <div class="blog_central-img" />
            <div class="blog_rigth-img" />
          </div>
        </div>
        {/* <---Discription---> */}
        <div class="discription_container">
          <div class="discription_left-container">
            Freedom to create the site of your dreams
          </div>
          <div class="discription_rigth-container">
            <div class="discription_text-container">
              Design and build your own quality sites. With Wix Website Designer
              , anything is possible - promoting a business, showcasing work,
              opening a store or creating a blog.
            </div>
            <a href="/auth" class="discription_button">
              Get started
            </a>
          </div>
        </div>
        {/* <---instruction---> */}
        <div class="instruction_container">
          <div class="instruction_left-container">
            <div class="instructon_text1">Build your unique website</div>
            <div class="instructon_text2">
              To create your own website, follow these steps:
            </div>
            <div class="instructon_text3">
              <div class="instructon_text3-left">
                <div class="instructon_text3-left-up">Set up your site</div>
                <div class="instructon_text3-left-down">
                  Choose a template and customize any of its elements or answer
                  a few questions and get a free site designed especially for
                  you.
                </div>
              </div>
              <div class="instructon_text3-rigth">
                <div class="instructon_text3-rigth-up">
                  Add advanced features
                </div>
                <div class="instructon_text3-rigth-down">
                  Start your own blog, add an online store and sign up for
                  online services. You can always add more features.
                </div>
              </div>
            </div>
            <div class="instructon_text3">
              <div class="instructon_text3-left">
                <div class="instructon_text3-left-up">
                  Configure the mobile version
                </div>
                <div class="instructon_text3-left-down">
                  See how your site looks on mobile. Go to the mobile editor to
                  best personalize your site.
                </div>
              </div>
              <div class="instructon_text3-rigth">
                <div class="instructon_text3-rigth-up">
                  Optimize your site for search engines
                </div>
                <div class="instructon_text3-rigth-down">
                  Optimize your site for search enginesPowerful SEO tools will
                  help increase your organic traffic and be in the top positions
                  in search results.
                </div>
              </div>
            </div>
            <a
              href="/auth"
              class="discription_button instruction_button-selector"
            >
              Get started
            </a>
          </div>
          <div class="instruction_rigth-container">
            <div class="instruction_rigth-up-container">
              <div class="instruction_rigth-img" />
            </div>
            <div class="instruction_rigth-down-container" />
          </div>
        </div>
        {/* <---templates---> */}
        <div class="templates_container">
          <div class="templates_text-container">
            <div class="templates_text-up">Professional design templates</div>
            <div class="templates_text-down">
              Choose from over 500 custom templates to suit your business needs.
            </div>
          </div>
          <a href="/auth" class="tempates_button">
            See all templates
          </a>
          <div class="templates_colage-container">
            <div class="templates_colage-container-up">
              <div class="templates_colage-img-up">
                <div class="templates_colage-img-1 templates-img" />
                <div class="templates_colage-img-2 templates-img" />
                <div class="templates_colage-img-3 templates-img" />
              </div>
              <div class="templates_colage-text-down">
                <div class="templates-text">Blog</div>
                <div class="templates-text ">Business</div>
                <div class="templates-text">Internet-shop</div>
              </div>
            </div>

            <div class="templates_colage-container-down">
              <div class="templates_colage-img-up">
                <div class="templates_colage-img-4 templates-img" />
                <div class="templates_colage-img-5 templates-img" />
                <div class="templates_colage-img-6 templates-img" />
              </div>
              <div class="templates_colage-text-down">
                <div class="templates-text">Design</div>
                <div class="templates-text">Foto</div>
                <div class="templates-text">Education</div>
              </div>
            </div>
          </div>
        </div>
        {/* <---guide---> */}
        <div id="guide" class="guide_container">
          <div class="guide_text-container templates_text-container">
            <div class="guide_text-up templates_text-up">
              How to create a website for free
            </div>
            <div class="guide_text-down">
              Follow the 6 easy steps to create a website today.
            </div>
            <div class="guide_discription-container">
              <div>
                <strong>1.Register for free in the site builder.</strong>
                Choose
                which site you want to create.
              </div>
              <div>
                <strong>
                  2.Customize the template or get a ready-made site created just
                  for you.
                </strong>
                {' '}
                Choose where to start.
              </div>
              <div>
                <strong>
                  3.Add hundreds of design elements to your site by simply
                  dragging and dropping them.
                </strong>
                {' '}
                Texts, galleries, videos, vector pictures and more.
              </div>
              <div>
                <strong>4.Start your business.</strong>
                {' '}
                Add an online store,
                service registration system, registered members section or blog.
              </div>
              <div>
                <strong>5.Publish the site online.</strong>
                {' '}
                Start presenting
                your professional activities online.
              </div>
              <div>
                <strong>6.Drive traffic to your site.</strong>
                {' '}
                Use advanced SEO
                tools and integrate marketing solutions.
              </div>
            </div>
            <div class="guider_button-container">
              <a href="/auth" class="guide_button-rigth">
                More about creating site
              </a>
            </div>
          </div>
        </div>
        {/* <---post---> */}
        <div class="post_container">
          <div class="post_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
