import { Component } from 'services/Component';
import { ArticleService } from 'services/articles-service';
import './home-component.scss';

export const Home = new Component('app-home');

const _articlesSrv = new ArticleService();

let articles = [];
_articlesSrv.getArticles().then(
    response => {
        createTemplate(response)
    }
);

const createTemplate = (items) => {
        console.log(items)
        Home.template = `
        <section class="container songs">
        ${items.map(item => `
        
            <div class="card">
                <h2 class="card-title">${item.title}</h2>
                <img class="card-image" src="${item.picture}" alt="${item.title}">
                <p class="card-content">
                    ${item.intro}
                </p>
                <div class="card-footer">
                    <img class="card-profile-image" src="${item.authorImage}" alt="${item.author}">
                    <span class="card-author">${item.author}</span>
                    <span class="card-date">${resolveDate(item.date)}</span>
                    <a href="./article.html?id=${item.id}" class="btn card-btn">Ver comentarios - <span class="card-count">${item.comments.length}</span></a>
                </div>
            </div>

      `).join('')}
        </section>
    `;
    Home.render();
}

const resolveDate = (dateString) => {
    return dateString;
}


export default Home;