import { Component } from 'services/Component';
import './home-component.scss';

export const Home = new Component('app-home');

Home.template = `
    <section>
        Home component - Render
    </section>
`;

export default Home;