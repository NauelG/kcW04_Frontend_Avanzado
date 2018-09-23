import { Component } from 'services/Component';
import { ArticleService } from 'services/articles-service';
import './home-component.scss';

export const Home = new Component('app-home');

const _articlesSrv = new ArticleService();

_articlesSrv.getArticles().then(
    response => {
        if (response.err) {
            Home.createError(response.err);
        }
        if (response.length < 1) {
            Home.createError('No se han encontrado artículos');
        } else {
            createTemplate(response);
        }
    }
);

const createTemplate = (items) => {
        Home.template = `
        <section class="container songs">
        ${items.map(item => `

            <div class="card">
                <h2 class="card-title"> ${item.title} </h2>
                <img class ="card-image" src="${validateImage(item.picture, false)}" alt ="${item.title}">
                <p class="card-content">
                    ${item.intro}
                </p>
                <div class="card-footer">
                    <img class="card-profile-image" src="${validateImage(item.authorImage, true)}" alt="${item.author}">
                    <span class="card-author"> ${item.author}</span>
                    <span class ="card-date">Publicado ${resolveDate(item.date)}</span>
                    <a href ="./article.html?id=${item.id}" class="btn card-btn">Ver comentarios<span class="card-count">${item.comments.length}</span></a>
                </div>
            </div>
    `).join('')}
        </section>
    `;
    Home.render();
};

const resolveDate = (dateString) => {
    const datePublish = new Date(dateString);
    const timePass = Date.now() - datePublish;
    
    let hours = parseInt(timePass/(1000*60*60));
    let minutes = parseInt((timePass/(1000*60))%60);

    if ( hours > 24 ) {
        return `el ${datePublish.getDay()}/${datePublish.getMonth()}/${datePublish.getFullYear()}`;
    } else if ( hours > 0 ) {
        return `hace ${hours} h.`;
    } else {
        return `hace ${minutes} min.`;
    }
   
};


const validateImage = (img, isProfile) => {

    if ( img == null | img == undefined | img == '' ) {
        switch (isProfile) {
            case true:
                return 'https://images.freeimages.com/images/large-previews/a96/business-man-avatar-vector-1236211.jpg';
                break;
            case false:
                return 'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54377f5b027ff2148452c9f0079056f9&auto=format&fit=crop&w=1650&q=80';
                break;
        }
    } else {
        return img;
    }
}


export default Home;