import { Component } from 'services/Component';
import './header-component.scss';

export const Header = new Component('app-header');

const data = Header.getData();

Header.template = `
    <header>
        Hola mundo desde el header modificado
        <p>${data[0].text}</p>
    </header>
`;

Header.render();
export default Header;