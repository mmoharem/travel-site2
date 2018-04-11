
import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll("our-features__item", "85%");
new RevealOnScroll("testimonials-block", "65%");
