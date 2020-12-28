import { UserStore } from 'containers/Login/UserStore';

class AppStore
{
    constructor()
    {
        this.userStore = new UserStore(this);
    }
}

export default new AppStore();