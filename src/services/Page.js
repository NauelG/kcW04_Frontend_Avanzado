import { Header } from 'components/shared/header/header-component';
import { Footer } from 'components/shared/footer/footer-component';

export class Page {

    constructor({
        component: component,
        selector: selector
    }) {
        this.component = component;
        this.selector = selector;
        this.renderSelector();
    }

    renderSelector() {
        document.querySelector('#app').innerHTML = `<${this.selector}></${this.selector}>`;
    }



}

export default Page;