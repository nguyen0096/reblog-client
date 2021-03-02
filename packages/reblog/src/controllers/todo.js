import HttpClient from 'utils/http';

export class TodoController {
    constructor(store) {
        this.store = store;
        this.httpClient = new HttpClient();
    }

    async getAllTodos() {
        this.httpClient.get('/todo').then((res) => {
            console.log(res);
        });
    }
}