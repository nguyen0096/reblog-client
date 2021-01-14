import HttpClient from 'utils/http';

export class UserController {
    constructor(store) {
        this.store = store;
        this.httpClient = new HttpClient();
    }

    async login(formData) {
        this.httpClient.post('/auth/login', formData).then((data) => {
            console.log("Data: ", data);
        });
    }
}