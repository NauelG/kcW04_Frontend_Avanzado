export class Component {
    constructor(selector, template = '') {
        this.selector = selector;
        this.template = template;
    }

    render() {
        var elements = document.getElementsByTagName(this.selector);
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = this.template;
        }
    }

    createError(error) {
        this.template = `
            <div class="container-message">
                <i class="fas fa-exclamation-triangle"></i>
                <span>${error}</span>
            </div>
        `;
        this.render();
    }

    getData() {
        var elements = document.getElementsByTagName(this.selector);
        var dataset = [];
        for (let i = 0; i < elements.length; i++) {
            dataset.push(elements[i].dataset);
        }
        return dataset;
    }
}

export default Component;