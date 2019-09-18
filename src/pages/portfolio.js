import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import waterfall from '../images/photoshop_angel_n_waterfall.png';
import glowingMushroom from '../images/photoshop_glowing_mushroom.png';
import breakfastPoster from '../images/photoshop_poster_breakfast.png';
import comicstaanPoster from '../images/photoshop_poster_comicstaan.png';
import tajMattePainting from '../images/photoshop_taj_matte_painting.png';

import appSignin from '../images/illustrator_signin.png';
import appHome from '../images/illustrator_home.png';
import appMenu from '../images/illustrator_menu.png';
import appSubMenu from '../images/illustrator_submenu.png';
import appRewards from '../images/illustrator_rewards.png';
import appAbout from '../images/illustrator_about.png';
import appCheckout from '../images/illustrator_checkout.png';


let style = {
  'text-align': 'center'
}
const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1 style={style} >Portfolio </h1>
    <br/>
    <h3><u>Photoshop</u></h3>
    <br/>
  
    <div className="container">
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={waterfall}>
            <img src={waterfall} alt="image manipulation"/>
          </a>
          <div class="desc">Image Manipulation: 1</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={waterfall}>
            <img src={glowingMushroom} alt="image manipulation"/>
          </a>
          <div class="desc">Image Manipulation: 2</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={breakfastPoster}>
            <img src={breakfastPoster} alt="image manipulation"/>
          </a>
          <div class="desc">Poster: 1</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={comicstaanPoster}>
            <img src={comicstaanPoster} alt="image manipulation"/>
          </a>
          <div class="desc">Poster: 2</div>
        </div>
      </div
      >
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={tajMattePainting}>
            <img src={tajMattePainting} alt="image manipulation"/>
          </a>
          <div class="desc">Matte Painting</div>
        </div>
      </div>
    </div>

    <h3><u>Illustrator</u></h3>
    <div className="container">

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={appSignin}>
            <img src={appSignin} alt="Application sign"/>
          </a>
          <div class="desc">Application Sigin Page</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={appHome}>
            <img src={appHome} alt="Application Home"/>
          </a>
          <div class="desc">Application Home Page</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={appMenu}>
            <img src={appMenu} alt="Application Menu"/>
          </a>
          <div class="desc">Application Menu</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={appSubMenu}>
            <img src={appSubMenu} alt="Application Sub Menu"/>
          </a>
          <div class="desc">Application Sub-Menu Page</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={appRewards}>
            <img src={appRewards} alt="Application Rewards"/>
          </a>
          <div class="desc">Application Rewards Page</div>
        </div>
      </div>
    

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={appAbout}>
            <img src={appAbout} alt="Application About"/>
          </a>
          <div class="desc">Application About Page</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={appCheckout}>
            <img src={appCheckout} alt="Application checkout"/>
          </a>
          <div class="desc">Application Checkout Page</div>
        </div>
      </div>

    </div>    
  </Layout>
)

export default Portfolio;