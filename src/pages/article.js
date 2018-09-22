import { Header } from 'components/shared/header/header-component';
import { Footer } from 'components/shared/footer/footer-component';
import { Article } from 'components/article/article-component';

document.querySelector('#app').innerHTML = `
    <app-article></app-article>
`;

Article.render();