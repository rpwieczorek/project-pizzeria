/*global Flickity */
import {utils} from '../utils.js';
import {select, templates} from '../settings.js';

class Home{
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initAction();
  }

  render(element){
    const thisHome = this;
    const generatedHTML = templates.home();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.appendChild(utils.createDOMFromHTML(generatedHTML));
  }
  
  initAction(){
    const thisHome = this;    
  
    setTimeout(() => {
      thisHome.flkty = new Flickity(select.home.carousel, {
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 3000,
        cellAlign: 'left',
        contain: true,
      });
    }, 50);
  }
}

export default Home;