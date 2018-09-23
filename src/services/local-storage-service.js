export class LocalStorageService {

    constructor() {}

    set(key, value) {
        return localStorage.setItem(key, value);
    }

    get(key) {
        return localStorage.getItem(key);
    }
}

export default LocalStorageService;