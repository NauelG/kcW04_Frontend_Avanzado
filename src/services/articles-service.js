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
}

export default ArticleService;