import $ from 'jquery';

class MobileMenu {
    constructor(){
        this.header = $(".header");
        this.menuIcon = $(".header__mob-menu--icon");
        this.menuContent = $(".primary-nav");
        this.navBtn = $(".primary-nav__btn");
        this.events();

    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this)); //using bind to make toggleTheMenu refer to our class
    }

    toggleTheMenu(){
        this.menuContent.toggleClass("primary-nav--visible");
        this.navBtn.toggleClass("primary-nav__btn--visible");
        this.header.toggleClass("header--expanded");
        this.menuIcon.toggleClass("header__mob-menu--icon__close-x");
    }

}

export default MobileMenu;
