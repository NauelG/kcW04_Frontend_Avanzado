import { Component } from 'services/Component';
import './footer-component.scss'

const Footer = new Component('app-footer');

Footer.template = `
    <footer class="footer">
        <nav class="footer-icons">
            <a href="https://www.linkedin.com/in/nauelg" target="_blank" title="linkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/GNauel" target="_blank" title="Twitter"><i class="fab fa-twitter-square"></i></a>
            <a href="https://github.com/NauelG/" target="_blank" title="GitHub"><i class="fab fa-github-square"></i></a>
            </nav>
        <span class="footer-copy">Todos los derechos reservados © 2018 | Página creada por <strong>Nauel G.</strong></span>
    </footer>
`;


Footer.render();



export default Footer;