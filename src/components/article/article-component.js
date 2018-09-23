import { Component } from 'services/Component';
import queryString from 'query-string';
import { ArticleService } from 'services/articles-service';
import { LocalStorageService } from 'services/local-storage-service';
import './article-component.scss';
import { Header } from '../shared/header/header-component';

export const Article = new Component('app-article');
const _articlesSrv = new ArticleService();
const _LSSrv = new LocalStorageService();

const articleId = queryString.parse(window.location.search).id;
let like = _LSSrv.get(`article-${articleId}`);
let comments = [];

_articlesSrv.getComments(articleId).then(
    response => {
        comments = response;
    }
)

_articlesSrv.getArticle(articleId).then(
    response => {
        if (response.err) {
            Article.createError(response.err);
        }
        if (response.length < 1) {
            Article.createError('No se ha encontrado el artículo.');
        } else {
            createTemplate(response);
        }
    }
);

const sendComment = (author, comment) => {
    const body = {
        articlesid: articleId,
        author: author,
        content: comment
    };
    _articlesSrv.postComment(body).then(
        response => {
            window.location.reload();
        }
    )
}

const createTemplate = (item) => {
        Article.template = `
    <section class="container article">
        <h2 class="article-title">
            ${item.title}
        </h2>
        <i id="like" class="far fa-grin-stars ${like ? 'fas' : ''}"></i>
        <img src="${item.mainPicture}" alt="${item.title}">
        <div class="article-text">
            ${item.content}
        </div>
        <div class="comments" id="comments">
            <span class="comment-title">Comentarios</span>
            ${comments.map( comment => `

                <div class="comment">
                    <span class="comment-author">${comment.author}:</span>
                    <span class="comment-content">${comment.content}</span>
                </div>

            `).join('')}

            <div class="new-comment">
                <span class="comment-title">Dejar un nuevo comentario</span>
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" id="comment-author" required>
                </div>
                <div class="form-group">
                    <label>Comentario:</label>
                    <input type="text" id="comment-text" required>
                </div>
                <button class="btn-comment" id="comment-post">Enviar</button>
            </div>
        </div>
    </section>
`;
    Article.render();
    Article.likeAction();
    Article.postComentAction();
};

Article.likeAction = () => {
    const button = document.querySelector('#like');
    button.addEventListener('click', () => {
        if (like) {
            like = false;
        } else {
            like = true;
        }
        button.classList.toggle('fas');
        _LSSrv.set(`article-${articleId}`, like);
    });
}

Article.postComentAction = () => {
    const button = document.querySelector('#comment-post');
    const nameInput = document.querySelector('#comment-author');
    const commentInput = document.querySelector('#comment-text');
    button.addEventListener('click', () => {
        sendComment(nameInput.value, commentInput.value);
    });
}

export default Article;