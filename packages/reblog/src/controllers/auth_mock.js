import HttpClient from 'utils/http';

export class AuthController {
    constructor(store) {
        this.store = store;
        this.httpClient = new HttpClient();
    }

    async login(formData) {
        new Promise(resolve => {
            setTimeout(resolve({data: 'dummytoken'}), 500);
        }).then((res) => {
            console.log(res);
            if (res) {
                localStorage.setItem('token', res.data);
                this.store.setAuthProfile(res.data);
                // window.location.replace('/dashboard');
            }
        });
    }
}