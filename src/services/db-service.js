export class DbService {
    constructor() {
        this.url = process.env.API_URL;
    }

    async get(uri) {
        try {
            const response = await fetch(`${this.url}${uri}`);
            if (!response.ok) {
                throw Error(response.statusText);
            };
            return response.json();
        } catch (err) {
            console.error(err);
            return { err };
        }
    }

    async post(body, uri) {
        try {
            const response = fetch(`${this.url}${uri}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return true;
        } catch (err) {
            console.error(err);
            return { err };
        }
    }
}

export default DbService;