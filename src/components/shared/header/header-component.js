import { Component } from 'services/Component';
import './header-component.scss';

export const Header = new Component('app-header');

Header.template = `
    <header class="header">
        <h1 class="logo">Think<span>G</span>eek</h1>
        <nav class="menu">
                <a id="toggle-login" class="toggle toggle-login" href="#">
                <i class="far fa-user"></i> 
                </a>
                <a href="#">Tecnología</a>
                <a href="#">Programación</a>
                <a href="#">Redes y Seguridad </a>
                <a href="#">Big Data</a>
                <a id="toggle-menu" class="toggle toggle-menu" href="#">
                    <i class="fa fa-bars"></i> 
                </a>
        </nav>
        <div class="login-form" id="login-form">
            <span>LOGIN</span>
            <div class="form-group">
                <label>User</label>
                <input type="text">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password">
            </div>
            <button class="btn btn-login">
                Login
            </button>
        </div>
    </header>
`;

Header.toggleActions = () => {
    // MENU
    const menu = document.querySelector('nav.menu');
    const buttonMenu = document.querySelector('a#toggle-menu');
    buttonMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-open');
    });
    // LOGIN
    const login = document.querySelector('#login-form');
    const buttonLogin = document.querySelector('#toggle-login');
    buttonLogin.addEventListener('click', () => {
        login.classList.toggle('login-open');
    });
};


Header.render();
Header.toggleActions();
export default Header;