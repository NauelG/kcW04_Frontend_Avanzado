import { Component } from 'services/Component';
import './header-component.scss';

export const Header = new Component('app-header');

Header.template = `
    <header class="header">
        <h1 class="logo">Think<span>G</span>eek</h1>
        <nav class="menu">
                <a href="#">Tecnología</a>
                <a href="#">Programación</a>
                <a href="#">Redes y Seguridad </a>
                <a href="#">Big Data</a>
                <a id="toggle-menu" class="toggle-menu" href="#">
                    <i class="fa fa-bars"></i> 
                </a>
        </nav>
    </header>
`;

Header.toggleMenu = () => {
    const menu = document.querySelector('nav.menu');
    const button = document.querySelector('a#toggle-menu');
    button.addEventListener('click', () => {
        console.log('click')
        menu.classList.toggle('menu-open');
    })
};


Header.render();
Header.toggleMenu();
export default Header;