import { Component } from 'services/Component';
import './article-component.scss';

export const Article = new Component('app-article');

Article.template = `
    <section>
        Article component - Render
    </section>
`;

export default Article;