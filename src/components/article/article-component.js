import { Component } from 'services/Component';
import './article-component.scss';

export const Article = new Component('app-article');

Article.template = `
    <div class="container">
        Article component - Render
    </div>
`;

export default Article;