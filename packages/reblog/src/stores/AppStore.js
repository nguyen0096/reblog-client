import { TodoStore } from './TodoStore';
import { AuthStore } from './AuthStore';

class AppStore
{
    constructor() {
        this.authStore = new AuthStore(this);
        this.todoStore = new TodoStore(this);
    }
}

export default new AppStore();