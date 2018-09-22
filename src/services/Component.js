export class Component {
    constructor(selector, template = '') {
        this.selector = selector;
        this.template = template;
    }

    render() {
        var elements = document.getElementsByTagName(this.selector);
        console.log(elements)
        for (let i = 0; i < elements.length; i++) {
            console.log(elements);
            console.log(this.template)
            elements[i].innerHTML = this.template;
        }
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