import DbService from './db-service';

export class ArticleService extends DbService {

    constructor() {
        super();
        this.model = 'articles';
    }

    async getArticles() {
        return this.get(this.model);
    }

    async getArticle(id) {
        return this.get(`${this.model}/${id}`);
    }

    async getComments(id) {
        return this.get(`${this.model}/${id}/comments`)
    }

    async postComment(body) {
        return this.post(body, `comments`)
    }
}

export default ArticleService;