import HttpClient from 'utils/http';

export class AuthController {
    constructor(store) {
        this.store = store;
        this.httpClient = new HttpClient();
    }

    async login(formData) {
        this.httpClient.post('/auth/login', formData).then((res) => {
            if (res) {
                localStorage.setItem('token', res.data);
                this.store.setAuthProfile(res.data);
                window.location.replace('/dashboard');
            }
        });
    }

    async logout() {

    }
}