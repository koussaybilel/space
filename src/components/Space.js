import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
            
	
  <div className="container" style={{zIndex: '2000',position: 'fixed'}}>
    <ul id="gn-menu" className="gn-menu-main">
      <li className="gn-trigger">
        <a className="gn-icon gn-icon-menu" style={{backgroundColor: 'white'}}><span>Menu</span></a>
        <nav className="gn-menu-wrapper">
          <div className="gn-scroller">
            <ul className="gn-menu">
              <li className="gn-search-item">
                <input placeholder="Search" type="search" className="gn-search"/>
                <a className="gn-icon gn-icon-search"><span>Search</span></a>
              </li>
              <li>
                <a className="gn-icon gn-icon-help">About us</a>
                <ul className="gn-submenu">
                  <li><a className="gn-icon gn-icon-help">Services</a></li>
                  <li><a className="gn-icon gn-icon-help">They trust us</a></li>
                </ul>
              </li>
              <li><a className="gn-icon gn-icon-help">Partners</a></li>
              
              <li>
                <a className="gn-icon gn-icon-archive">Archives</a>
                <ul className="gn-submenu">
                  <li><a className="gn-icon gn-icon-article">News</a></li>
                  <li><a className="gn-icon gn-icon-pictures">Workspace</a></li>
                  <li><a className="gn-icon gn-icon-pictures">Featured  jobs</a></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </li>
    
      <li><a  href="#"><span> logo</span></a></li>
      <li><a  href="#"><span> Home</span></a></li>
      <li style={{backgroundColor: 'white'}}><a  href="#"  style={{borderLeft:'none', color:'white'}}><span> <img src="img/0.png" alt="" width='50' style={{paddingTop:'5px' }}/></span></a></li> 
    </ul>
    
    
  </div>


  <svg className="hidden">
    <symbol id="icon-arrow" viewBox="0 0 24 24">
      <title>arrow</title>
      <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
    </symbol>
    <symbol id="icon-drop" viewBox="0 0 24 24">
      <title>drop</title>
      <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
      <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
    </symbol>
    <symbol id="icon-longarrow" viewBox="0 0 54 24">
      <title>longarrow</title>
      <path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z" />
    </symbol>
    <symbol id="icon-navarrow" viewBox="0 0 408 408">
      <title>navarrow</title>
      <polygon fill="#fff" fill-rule="nonzero" points="204 0 168.3 35.7 311.1 178.5 0 178.5 0 229.5 311.1 229.5 168.3 372.3 204 408 408 204"></polygon>
    </symbol>
  </svg>
  <main>
    <div className="frame">
      <header className="codrops-header">
     	<h1 className="codrops-header__title">Diagonal Slideshow</h1>
      
      </header>
    </div>
    <div className="slideshow">
      <div className="slideshow__deco"></div>
      <div className="slide">
        <div className="slide__img-wrap">
          <div className="slide__img" style={{backgroundImage:'url(img/slide/1.jpg)'}}></div>
        </div>
        <div className="slide__side">Lorem ipsum</div>
        <div className="slide__title-wrap">
          <span className="slide__number">1</span>
          <h3 className="slide__title">key space</h3>
          <h4 className="slide__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        </div>
      </div>
      <div className="slide">
        <div className="slide__img-wrap">
          <div className="slide__img" style={{backgroundImage: 'url(img/slide/2.jpg)'}}></div>
        </div>
        <div className="slide__side" >human ressources</div>
        <div className="slide__title-wrap">
          <span className="slide__number">2</span>
          <h3 className="slide__title">Human Ressources</h3>
          <h4 className="slide__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        </div>
      </div>
      <div className="slide" style={{borderLeft:'solid 1px rgba(255, 255, 255,.2)'}}>
        <div className="slide__img-wrap">
          <div className="slide__img" style={{backgroundImage: 'url(img/slide/2.jpg)'}}></div>
        </div>
        <div className="slide__side" >Lorem ipsum </div>
        <div className="slide__title-wrap">
          <span className="slide__number">3</span>
          <h3 className="slide__title">human Ressource</h3>
          <h4 className="slide__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        </div>
      </div>
      <div className="slide" >
        <div className="slide__img-wrap">
          <div className="slide__img" style={{backgroundImage: 'url(img/slide/2.jpg)'}}></div>
        </div>
        <div className="slide__side" >Lorem ipsum dolor </div>
        <div className="slide__title-wrap">
          <span className="slide__number">4</span>
          <h3 className="slide__title">Space name</h3>
          <h4 className="slide__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        </div>
      </div>
      <div className="slide" >
        <div className="slide__img-wrap">
          <div className="slide__img" style={{backgroundImage: 'url(img/slide/2.jpg)'}}></div>
        </div>
        <div className="slide__side">Fun Diverge</div>
        <div className="slide__title-wrap">
          <span className="slide__number">5</span>
          <h3 className="slide__title">Lorem ipsum dolor s</h3>
          <h4 className="slide__subtitle">Lorem ipsum dolor </h4>
        </div>
      </div>
      <div className="slide">
        <div className="slide__img-wrap">
          <div className="slide__img" style={{backgroundImage: 'url(img/slide/2.jpg)'}}></div>
        </div>
        <div className="slide__side">Lorem ipsum dolor </div>
        <div className="slide__title-wrap">
          <span className="slide__number">6</span>
          <h3 className="slide__title">Focus</h3>
          <h4 className="slide__subtitle">Lorem ipsum dolor </h4>
        </div>
      </div>
      <button className="nav nav--prev">
        <svg className="icon icon--navarrow-prev">
          <use xlink href="#icon-navarrow"></use>
        </svg>
      </button>
      <button className="nav nav--next">
        <svg className="icon icon--navarrow-next">
          <use xlink href="#icon-navarrow"></use>
        </svg>
      </button>
    </div>
    <div className="content">
      <div className="content__item">
        <span className="content__number">1</span>
        <h3 className="content__title">key space</h3>
        <h4 className="content__subtitle">Lorem ipsum dolor sit amet consectetur adipiscing elit</h4>
        <div className="content__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
      </div>
      <div className="content__item">
        <span className="content__number">2</span>
        <h3 className="content__title">Human ressources</h3>
        <h4 className="content__subtitle">Lorem ipsum dolor sit amet consectetur adipiscing elit</h4>
        <div className="content__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".</div>
      </div>
      <div className="content__item">
        <span className="content__number">3</span>
        <h3 className="content__title">Zoom Room</h3>
        <h4 className="content__subtitle">Lorem ipsum dolor sit amet</h4>
        <div className="content__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </div>
      </div>
      <div className="content__item">
        <span className="content__number">4</span>
        <h3 className="content__title">Leader Room</h3>
        <h4 className="content__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <div className="content__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
      </div>
      <div className="content__item">
        <span className="content__number">5</span>
        <h3 className="content__title">Pastures</h3>
        <h4 className="content__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <div className="content__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
      </div>
      <div className="content__item">
        <span className="content__number">6</span>
        <h3 className="content__title">Focus</h3>
        <h4 className="content__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <div className="content__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
      </div>
      <button className="content__close">
        <svg className="icon icon--longarrow">
          <use xlink href="#icon-longarrow"></use>
        </svg>
      </button>
    </div>
  </main>
 
  
  
          </div>
          
        )
    }
}

export default About
