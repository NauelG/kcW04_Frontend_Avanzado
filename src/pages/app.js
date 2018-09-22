import { Header } from 'components/shared/header/header-component';
import { Footer } from 'components/shared/footer/footer-component';
import { Home } from 'components/home/home-component';

document.querySelector('#app').innerHTML = `
    <app-home></app-home>
`;

Home.render();