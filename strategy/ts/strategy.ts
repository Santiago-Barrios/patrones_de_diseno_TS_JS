interface Strategy {
    login(user: string, password: string): boolean;
}


class LoginContext {

    private strategy: Strategy;

    constructor (strategy: Strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
       return this.strategy.login(user, password)
    }
}


class LoginDBStrategy implements Strategy {

    login(user: string, password: string): boolean {
        console.log('nos dirigimos a la base de datos');
        if (user === 'admin' && password === 'entra') {
            return true;
        }
        return false;
     }
}

class LoginServiceStrategy implements Strategy {

    login(user: string, password: string): boolean {
        console.log('nos dirigimos un servicio de autentificación');
        if (user === 'admin' && password === 'entra') {
            return true;
        }
        return false;
     }
}


const auth = new LoginContext(new LoginDBStrategy());
const resp = auth.login('admin', 'entra');
console.log('resp', resp)
auth.setStrategy(new LoginServiceStrategy())
const resp2 = auth.login('admin', 'entra');
console.log('resp2', resp2)