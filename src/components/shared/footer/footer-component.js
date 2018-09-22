import { Component } from 'services/Component';
import './footer-component.scss'

const Footer = new Component('app-footer');

Footer.template = `
    <footer>
        Todos los derechos reservados
    </footer>
`;


Footer.render();



export default Footer;