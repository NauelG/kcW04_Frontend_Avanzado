import { Header } from 'components/shared/header/header-component';
import { Footer } from 'components/shared/footer/footer-component';

export class Page {

    constructor({
        component: component,
        selector: selector,
        title: title
    }) {
        this.component = component;
        this.selector = selector;
        this.title = title;
        this.renderSelector();
        this.changeTitle();
    }

    changeTitle() {
        document.title = this.title;
    }

    renderSelector() {
        document.querySelector('#app').innerHTML = `<${this.selector}></${this.selector}>`;
    }



}

export default Page;