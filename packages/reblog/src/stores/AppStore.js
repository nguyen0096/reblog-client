import { AuthStore } from './AuthStore';

class AppStore
{
    constructor() {
        this.authStore = new AuthStore(this);
    }
}

export default new AppStore();